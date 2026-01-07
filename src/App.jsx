import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Browser from "./pages/Browser";
import Home from "./pages/home";
import Content from "./pages/Content";
import Quiz from "./pages/Quiz";
import QuestionBank from "./pages/QuestionBank";
import QuizStart from "./pages/QuizStart";
import ProgressPage from "./pages/ProgressPage";



function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/browse/:nodeId?" element={<Browser />} />
        <Route path="/content/:nodeId" element={<Content />} />
        <Route path="/quiz/:nodeId" element={<Quiz />} />
        <Route path="/question-bank/:nodeId" element={<QuestionBank />} />
        <Route path="/quiz/start/:nodeId" element={<QuizStart />} />
         <Route path="/progressPage..." element={<ProgressPage />} />


      </Route>
    </Routes>
  );
}

export default App;
