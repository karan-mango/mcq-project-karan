import { useParams } from "react-router-dom";
import { getNodeById } from "../services/nodeService";

function Content() {
  const { nodeId } = useParams();
  const node = getNodeById(nodeId);

  if (!node) {
    return <div>Content not found</div>;
  }

  return (
    <div>
      <h2>Content Page</h2>
      <p><strong>Title:</strong> {node.title}</p>
      <p><strong>Type:</strong> {node.type}</p>

      <hr />

      <p>This is where study content will be rendered.</p>
    </div>
  );
}

export default Content;
