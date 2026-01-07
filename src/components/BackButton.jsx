import { useNavigate } from "react-router-dom";

function BackButton({ label = "Back" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed bottom-12 left-1/2 z-50 -translate-x-1/2
                 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium
                 text-white shadow-lg transition hover:bg-gray-800
                 active:scale-95"
    >
      ← {label}
    </button>
  );
}

export default BackButton;
