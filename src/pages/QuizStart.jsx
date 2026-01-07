/* ============================================================
   IMPORTS
   ============================================================ */

import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import { getAllDescendantQuestionNodes, getNodeById } from '../services/nodeService';

import styles from './QuizStart.module.css';
import { getQuestionsByNodeIds } from '../services/questionService';

/* ============================================================
   HELPER FUNCTIONS (PURE)
   ============================================================ */

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}



function groupByQuestionNode(questions) {
  const map = {};

  for (const q of questions) {
    const key = q.topicId || q.chapterId;
    if (!key) continue;

    if (!map[key]) map[key] = [];
    map[key].push(q);
  }

  // 🔀 shuffle questions inside each topic
  for (const key in map) {
    map[key] = shuffleArray(map[key]);
  }

  return map;
}



function selectQuestionsEqually(questionsByTopic, totalRequired) {
  const topicIds = Object.keys(questionsByTopic);
  if (topicIds.length === 0) return [];

  const base = Math.floor(totalRequired / topicIds.length);
  const remainder = totalRequired % topicIds.length;

  const selected = [];

  for (const tid of topicIds) {
    selected.push(...questionsByTopic[tid].slice(0, base));
  }

  if (remainder > 0) {
    const extra = topicIds.flatMap((tid) => questionsByTopic[tid].slice(base));
    selected.push(...extra.slice(0, remainder));
  }

  return selected;
}

/* ============================================================
   COMPONENT
   ============================================================ */

function QuizStart() {
  /* ================= ROUTER ================= */

  const { nodeId } = useParams();
  const [searchParams] = useSearchParams();

  const totalRequested = Number(searchParams.get('q')) ||10;
  const timeLimitMinutes = Number(searchParams.get('t')) || 2;

  /* ================= STATE ================= */

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const [timeLeft, setTimeLeft] = useState(timeLimitMinutes * 60);
  const [timeTaken, setTimeTaken] = useState(0);

  /* ================= DATA ================= */

  const resolvedTopicIds = getAllDescendantQuestionNodes(nodeId);
  const effectiveTopicIds = resolvedTopicIds.length > 0 ? resolvedTopicIds : [nodeId];

 const [selectedQuestions, setSelectedQuestions] = useState([]);

useEffect(() => {
  const fetched = getQuestionsByNodeIds(effectiveTopicIds);
  const grouped = groupByQuestionNode(fetched);
  const selected = selectQuestionsEqually(grouped, totalRequested);
  setSelectedQuestions(selected);
}, [nodeId, totalRequested]);

  const totalQuestionsCount = selectedQuestions.length;

  const attemptedCount = Object.keys(answers).length;
  const wrongCount = attemptedCount - score;
  const unattemptedCount = totalQuestionsCount - attemptedCount;

  const accuracy = attemptedCount > 0 ? Math.round((score / attemptedCount) * 100) : 0;

  /* ================= TIMER ================= */

  useEffect(() => {
    if (submitted || timeLeft <= 0) return;

    const id = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [timeLeft, submitted]);

  /* ================= HANDLERS ================= */

  const handleSelect = (qid, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [qid]: optionIndex }));
  };





  const submitQuiz = useCallback(() => {
    if (submitted) return; // 🔒 prevent double submit

    let correct = 0;

    for (const q of selectedQuestions) {
      if (answers[q.id] === q.correctOption) correct++;
    }

    const totalTime = timeLimitMinutes * 60;
    const spent = totalTime - timeLeft;

    setScore(correct);
    setTimeTaken(spent);
    setSubmitted(true);
  }, [answers, selectedQuestions, timeLimitMinutes, timeLeft, submitted]);

  useEffect(() => {
    if (timeLeft === 0 && !submitted) {
      submitQuiz();
    }
  }, [timeLeft, submitted, submitQuiz]);

  /* ================= UI HELPERS ================= */

  const topicNodes = effectiveTopicIds.map((id) => getNodeById(id)).filter(Boolean);

  const topicTitles = topicNodes.map((t) => t.title);

  const avgTimePerQuestion = attemptedCount > 0 ? Math.floor(timeTaken / attemptedCount) : 0;

  console.log(attemptedCount)
  function getTopicLabel() {
    if (topicTitles.length === 0) return 'No topic';
    if (topicTitles.length === 1) return topicTitles[0];
    if (topicTitles.length <= 3) return topicTitles.join(', ');
    return `${topicTitles.length} topics`;
  }

  const roundedTimeTaken = Math.max(1, Math.ceil(timeTaken));

  /* ================= UI ================= */

  return (
    <div className={styles.page}>
      {/* ================= STICKY HEADER ================= */}
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Quiz</h1>
          <p className={styles.subtitle}>{getTopicLabel()}</p>
        </div>

        <div className={styles.timer}>
          ⏱ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
        </div>
      </header>

      {/* ================= QUESTIONS ================= */}
      <main className={styles.content}>
        {selectedQuestions.map((q, index) => {
          const userAnswer = answers[q.id];
          const isAttempted = userAnswer !== undefined;
          const isCorrectAttempt = userAnswer === q.correctOption;

          let cardClass = styles.card;

          if (submitted) {
            if (!isAttempted) cardClass += ` ${styles.unattemptedCard}`;
            else if (isCorrectAttempt) cardClass += ` ${styles.correctCard}`;
            else cardClass += ` ${styles.wrongCard}`;
          }

          return (
            <div key={q.id} className={cardClass}>
              <p className={styles.question}>
                Q{index + 1}. {q.questionText}
              </p>

              <div className={styles.options}>
                {q.options.map((opt, i) => {
                  const isSelected = answers[q.id] === i;
                  const isCorrect = i === q.correctOption;

                  let cls = styles.option;
                  if (submitted && isCorrect) cls += ` ${styles.correct}`;
                  else if (submitted && isSelected) cls += ` ${styles.wrong}`;
                  else if (isSelected) cls += ` ${styles.selected}`;

                  return (
                    <label key={i} className={cls}>
                      <input type="radio" name={q.id} checked={isSelected} disabled={submitted} onChange={() => handleSelect(q.id, i)} />
                      <span>{opt}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>

      {/* ================= STICKY FOOTER ================= */}
      {!submitted && selectedQuestions.length > 0 && (
        <footer className={styles.footer}>
          <button onClick={submitQuiz} className={styles.submitBtn}>
            Submit Quiz
          </button>
        </footer>
      )}

      {submitted && (
        <footer className={styles.resultBar}>
          <div className="text-lg text-red-500">
            <strong>{wrongCount}</strong>
            <span>Wrong</span>
          </div>

         

          {/* <div className="text-lg text-blue-500" >
    <strong>{unattemptedCount}</strong>
    <span>Unattempted</span>
  </div> */}

          <div>
            <strong>
              {Math.floor(roundedTimeTaken / 60)}:{String(roundedTimeTaken % 60).padStart(2, '0')}
            </strong>

            <span>Time Taken</span>
          </div>

           <div className={`text-2xl text-green-500 scorecircle ${styles.scorecircle}`}>
            <strong>
              {score}/{score + wrongCount}
            </strong>
            <span>score</span>
          </div>

          <div>
            <strong>{avgTimePerQuestion}s</strong>
            <span>Avg / Q</span>
          </div>

          <div className={`text-lg text-purple-600  ${accuracy>50?styles.green:styles.red} ${styles.scorecircle}` }>
            <strong>{accuracy}%</strong>
            <span>Accuracy</span>
          </div>
        </footer>
      )}
    </div>
  );
}

export default QuizStart;
