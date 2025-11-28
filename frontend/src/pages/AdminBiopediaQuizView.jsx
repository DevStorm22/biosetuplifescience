import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBiopediaQuizView() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE = "http://localhost:5000/biopediaquiz";

  const fetchQuizzes = async () => {
    try {
      const res = await axios.get(`${API_BASE}/`);
      setQuizzes(res.data || []);
      setLoading(false);
      setError("");
    } catch (err) {
      setError("Failed to fetch quiz data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Biopedia Quiz View</h1>

      {loading && <p className="text-gray-600">Loading quizzes...</p>}
      {error && (
        <p className="text-red-600 bg-red-100 border rounded p-2">{error}</p>
      )}

      {!loading && quizzes.length === 0 && (
        <p className="text-gray-600">No quiz entries found.</p>
      )}

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-6xl">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Quiz Title</th>
              <th className="px-4 py-2 border">Question No.</th>
              <th className="px-4 py-2 border">Question</th>
              <th className="px-4 py-2 border">Option 1</th>
              <th className="px-4 py-2 border">Option 2</th>
              <th className="px-4 py-2 border">Option 3</th>
              <th className="px-4 py-2 border">Option 4</th>
            </tr>
          </thead>

          <tbody>
            {quizzes.map((quiz) =>
              quiz.questions.map((q, qIndex) => (
                <tr key={`${quiz._id}-${qIndex}`}>
                  <td className="px-4 py-2 border">{quiz.title}</td>
                  <td className="px-4 py-2 border">{qIndex + 1}</td>
                  <td className="px-4 py-2 border">{q.question}</td>
                  <td className="px-4 py-2 border">{q.options[0]}</td>
                  <td className="px-4 py-2 border">{q.options[1]}</td>
                  <td className="px-4 py-2 border">{q.options[2]}</td>
                  <td className="px-4 py-2 border">{q.options[3]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
