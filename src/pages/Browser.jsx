import { useParams, Link } from 'react-router-dom';
import { getChildren } from '../services/nodeService';
import styles from './Browser.module.css';
import BackButton from '../components/BackButton';
import { getNodePath } from "../services/nodeService";
import { getNodeById } from "../services/nodeService";


function Browser() {
  const { nodeId } = useParams();
  const children = getChildren(nodeId || null);
  const isLeaf = children.length === 0;
  const breadcrumb = nodeId ? getNodePath(nodeId) : [];

const currentNode = nodeId ? getNodeById(nodeId) : null;
const hasChildren = children.length > 0;
const nextType = hasChildren ? children[0].type : null;
const currentTitle = currentNode?.title || "";
const TYPE_LABEL = {
  exam: "Exam",
  section: "Subject",
  module: "Area",
  chapter: "Chapter",
  topic: "Topic",
};

const nextLabel = nextType ? TYPE_LABEL[nextType] : "";

  return (
    <div className={styles.page}>
   {breadcrumb.length > 0 && (
  <nav className={styles.breadcrumb}>
    {breadcrumb.map((node, index) => {
      const isLast = index === breadcrumb.length - 1;

      return (
        <span key={node.id} className={styles.crumb}>
          {!isLast ? (
            <Link
              to={`/browse/${node.id}`}
              className={styles.crumbLink}
            >
              {node.title}
            </Link>
          ) : (
            <span className={styles.crumbCurrent}>
              {node.title}
            </span>
          )}

          {!isLast && <span className={styles.separator}> &gt; </span>}
        </span>
      );
    })}
  </nav>
)}

=
<br />

<h1 className={styles.title}>
  {hasChildren
    ? currentTitle
      ? `Choose ${nextLabel} in ${currentTitle}`
      : `Choose ${nextLabel}`
    : `Materials for ${currentTitle} `}
</h1>





      {/* for child rendering */}
      {!isLeaf && (
        <div className={styles.grid}>
          {children.map((node,index) => (
            <Link key={node.id} to={`/browse/${node.id}`} className={styles.card}>
              <h3 className={` ${styles.cardTitle}`}> {index+1 +". "}{node.title}</h3>
              <div className={styles.image}>{node.image ? <img src={node.image} alt={node.title} className={styles.img} /> : <span className={styles.emoji}>📘</span>}</div>


              <p className={styles.cardDesc}>Explore important {children[0].type}</p>
            </Link>
          ))}
        </div>
      )}

      {/* code for the child rendering */}
      {isLeaf && (
        <div className={styles.grid}>
          <Link to={`/content/${nodeId}`} className={styles.card}>
            <h3 className={styles.cardTitle}>Study</h3>
            <div className={`${styles.image} ${styles.imageSmall}`}>
              {' '}
              <img src="https://cbx-prod.b-cdn.net/COLOURBOX55599024.jpg?height=800&quality=70&width=800" alt="" />{' '}
            </div>
          </Link>

          <Link to={`/quiz/${nodeId}`} className={styles.card}>
            <h3 className={styles.cardTitle}>Quiz</h3>

            <div className={`${styles.image} ${styles.imageSmall}`}>
              {' '}
              <img src="https://en.pimg.jp/103/191/137/1/103191137.jpg" alt="" />
            </div>
          </Link>

          <Link to={`/question-bank/${nodeId}`} className={styles.card}>
           <h3 className={styles.cardTitle}>Questions</h3>
            <div className={`${styles.image} ${styles.imageSmall}`}>
              {' '}
              <img src="https://st3.depositphotos.com/4302113/32885/v/1600/depositphotos_328858480-stock-illustration-to-do-list-form-for.jpg" alt="" />{' '}
            </div>
           
          </Link>
        </div>
      )}

      {nodeId && <BackButton />}
    </div>
  );
}

export default Browser;
