import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBiopediaQuizDelete() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState("");
  const [message, setMessage] = useState("");

  const API_BASE = "http://localhost:5000/biopediaquiz";

  // Fetch all quizzes
  const fetchQuizzes = async () => {
    try {
      const res = await axios.get(`${API_BASE}/`);
      setQuizzes(res.data);
    } catch (err) {
      console.log("Fetch error:", err.message);
      setMessage("Failed to load quizzes.");
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  // Handle delete
  const handleDelete = async (e) => {
    e.preventDefault();

    if (!selectedQuizId) {
      setMessage("Please select a quiz.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this quiz?")) return;

    try {
      const res = await axios.delete(`${API_BASE}/delete/${selectedQuizId}`);

      setMessage(res.data.message || "Quiz deleted successfully.");

      // Remove from list
      setQuizzes(quizzes.filter((quiz) => quiz._id !== selectedQuizId));

      setSelectedQuizId("");
    } catch (err) {
      console.log("Delete error:", err.message);
      setMessage("Error deleting quiz: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Biopedia Quiz Delete Page</h1>

      {message && (
        <div className="mb-4 p-3 bg-gray-100 text-center border rounded-md w-96">
          {message}
        </div>
      )}

      <form
        className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-96"
        onSubmit={handleDelete}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="quizId"
          >
            Select Quiz to Delete
          </label>

          <select
            id="quizId"
            value={selectedQuizId}
            onChange={(e) => setSelectedQuizId(e.target.value)}
            required
            className="form-select mt-1 w-full border-gray-300 rounded-md border p-2"
          >
            <option value="">Select Quiz</option>

            {quizzes.map((quiz) => (
              <option key={quiz._id} value={quiz._id}>
                {quiz.question}
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Delete Quiz
        </button>
      </form>
    </div>
  );
}
