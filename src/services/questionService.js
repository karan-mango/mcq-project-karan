import { ALL_QUESTIONS } from "../data/questionRegistry";
export function getQuestionsByNodeIds(nodeIds) {
  return ALL_QUESTIONS.filter(
    (q) =>
      q.status === "active" &&
      nodeIds.includes(q.topicId || q.chapterId)
  );
}
