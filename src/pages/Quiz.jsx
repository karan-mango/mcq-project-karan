import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getNodeById, getNodePath } from "../services/nodeService";
import BackButton from "../components/BackButton";
import { getQuestionsByNodeIds } from "../services/questionService";

function Quiz() {
  const { nodeId } = useParams();
  const navigate = useNavigate();
  const node = getNodeById(nodeId);
  const path = getNodePath(nodeId); // e.g. GK → Geography → Physical → Climate

  const [totalQuestions, setTotalQuestions] = useState(10);
  const [timeMinutes, setTimeMinutes] = useState(2);

  if (!node) {
    return (
      <div className="rounded-xl bg-white p-4 shadow">
        Quiz not found
      </div>
    );
  }

  const fetchedQuestions = getQuestionsByNodeIds([nodeId]);
  const maxQuestions = fetchedQuestions.length ?? 50; // safe default

console.log(fetchedQuestions)
  function handleStartQuiz() {
    if(fetchedQuestions.length>0){
      navigate(
      `/quiz/start/${nodeId}?q=${totalQuestions}&t=${timeMinutes}`
    );

    }
    else{
      navigate(
        "/progressPage..."
    );
    }
    
  }

  return (
    <div className="mx-auto  max-w-2xl space-y-6">
      
      {/* ===== CONTEXT HEADER ===== */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">
          {node.title}
        </h1>

       <p className="mt-1 text-sm text-gray-800">
  {path.map(n => n.title).join(" → ")}
</p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 font-medium">
            Type: {node.type.toUpperCase()}
          </span>

          <span className="rounded-full bg-green-50 px-3 py-1 text-green-700 font-medium">
            Max Questions Available: {maxQuestions}
          </span>
        </div>
      </div>


      {/* ===== FORM ===== */}
      <div className="rounded-xl bg-white p-6 shadow">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Total Questions */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Number of Questions
            </label>
            <input
              type="number"
              min="1"
              max={maxQuestions}
              placeholder={`Up to ${maxQuestions}`}
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(e.target.value)}
              className="w-full rounded-lg border text-gray-600 border-gray-300 px-3 py-2
                         text-sm focus:border-blue-500 focus:ring-1
                         focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500">
              Maximum available: {maxQuestions}
            </p>
          </div>

          {/* Time */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Time (minutes)
            </label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 15"
              value={timeMinutes}
              onChange={(e) => setTimeMinutes(e.target.value)}
              className="w-full rounded-lg border text-gray-600 border-gray-300 px-3 py-2
                         text-sm focus:border-blue-500 focus:ring-1
                         focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500">
              Recommended: 1 min per question
            </p>
          </div>
        </div>
      </div>

      {/* ===== ACTION ===== */}
      <button
        onClick={handleStartQuiz}
        disabled={
          !totalQuestions ||
          !timeMinutes ||
          totalQuestions > maxQuestions
        }
        className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold
                   text-white transition hover:bg-blue-700
                   disabled:cursor-not-allowed disabled:opacity-50"
      >
        Start Quiz
      </button>
      <BackButton label="Back" />
    </div>
  );
}

export default Quiz;
