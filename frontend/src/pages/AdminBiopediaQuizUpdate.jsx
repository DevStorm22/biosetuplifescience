import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBiopediaQuizUpdate() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    questions: Array.from({ length: 5 }, () => ({
      question: "",
      options: ["", "", "", ""]
    }))
  });
  const [message, setMessage] = useState("");

  const API_BASE = "http://localhost:5000/biopediaquiz";

  // Fetch all quizzes
  const fetchQuizzes = async () => {
    try {
      const res = await axios.get(`${API_BASE}/`);
      setQuizzes(res.data);
    } catch (err) {
      console.log("Fetch error:", err);
      setMessage("Failed to load quizzes.");
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  // Select quiz to update
  const handleQuizSelect = (id) => {
    setSelectedQuizId(id);

    if (!id) {
      setFormData({
        title: "",
        description: "",
        questions: Array.from({ length: 5 }, () => ({
          question: "",
          options: ["", "", "", ""]
        }))
      });
      return;
    }

    const selected = quizzes.find((q) => q._id === id);
    if (selected) {
      setFormData({
        title: selected.title,
        description: selected.description,
        questions: selected.questions
      });
    }
  };

  // Update title/description
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update question text
  const handleQuestionChange = (qIndex, value) => {
    const updated = [...formData.questions];
    updated[qIndex].question = value;
    setFormData({ ...formData, questions: updated });
  };

  // Update option text
  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...formData.questions];
    updated[qIndex].options[optIndex] = value;
    setFormData({ ...formData, questions: updated });
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!selectedQuizId) {
      setMessage("Please select a quiz to update.");
      return;
    }

    try {
      await axios.patch(`${API_BASE}/update/${selectedQuizId}`, formData);

      setMessage("Quiz updated successfully!");

      // Reset form and selection after successful update
      setSelectedQuizId("");
      setFormData({
        title: "",
        description: "",
        questions: Array.from({ length: 5 }, () => ({
          question: "",
          options: ["", "", "", ""]
        }))
      });

      // Refresh quiz list
      fetchQuizzes();
    } catch (err) {
      console.log("Update error:", err);
      setMessage("Failed to update quiz: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-[#00A6F5]">Update Quiz</h1>

      {message && (
        <div className="mb-4 p-3 bg-gray-100 text-center border rounded-md w-96">
          {message}
        </div>
      )}

      <form
        className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl max-w-3xl"
        onSubmit={handleSubmit}
      >
        {/* Select Quiz */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Quiz to Update
          </label>
          <select
            value={selectedQuizId}
            onChange={(e) => handleQuizSelect(e.target.value)}
            className="form-select mt-1 w-full border-gray-300 rounded-md border p-2"
            required
          >
            <option value="">Select Quiz</option>
            {quizzes.map((q) => (
              <option key={q._id} value={q._id}>
                {q.title}
              </option>
            ))}
          </select>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            placeholder="Enter quiz title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            placeholder="Enter quiz description"
            required
          />
        </div>

        {/* Questions */}
        {formData.questions.map((q, qIndex) => (
          <div key={qIndex} className="border p-5 rounded shadow-md">
            <h3 className="font-semibold text-lg mb-3 text-[#00A6F5]">
              Question {qIndex + 1}
            </h3>

            <input
              className="shadow border rounded py-2 px-3 mb-3 w-full"
              placeholder={`Enter question ${qIndex + 1}`}
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              required
            />

            <label className="font-semibold mb-2 block">Options</label>
            {q.options.map((opt, optIndex) => (
              <input
                key={optIndex}
                className="shadow border rounded py-2 px-3 mb-2 w-full"
                placeholder={`Option ${optIndex + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(qIndex, optIndex, e.target.value)}
                required
              />
            ))}
          </div>
        ))}

        <button
          className="bg-[#00A6F5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Update Quiz
        </button>
      </form>
    </div>
  );
}
