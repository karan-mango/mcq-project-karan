import { nodes } from "../data/nodes";



export function getChildren(parentId) {
  return nodes.filter((node) => node.parentId === parentId);
}
export function getNodeById(id) {
  return nodes.find((n) => n.id === id) || null;
}

export function getNodePath(nodeId) {
  const path = [];
  let current = getNodeById(nodeId);

  while (current) {
    path.push(current);
    current = current.parentId
      ? getNodeById(current.parentId)
      : null;
  }

  return path.reverse();
}

// NEW
export function getAllDescendantQuestionNodes(nodeId) {
  const result = [];

  function dfs(currentId) {
    const children = nodes.filter((n) => n.parentId === currentId);

    for (const child of children) {
      // ✅ chapters & topics can hold questions
      if (child.type === "chapter" || child.type === "topic") {
        result.push(child.id);
      }

      // keep going deeper no matter what
      dfs(child.id);
    }
  }

  const node = getNodeById(nodeId);
  if (!node) return [];

  // If user directly opens chapter or topic
  if (node.type === "chapter" || node.type === "topic") {
    return [node.id];
  }

  dfs(nodeId);
  return result;
}
