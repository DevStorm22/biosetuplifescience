import { useState } from "react";
import axios from "axios";

export default function AdminBiopediaQuizCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [questions, setQuestions] = useState(
    Array.from({ length: 5 }, () => ({
      question: "",
      options: ["", "", "", ""],
    }))
  );

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        title,
        description,
        questions,
      };

      const res = await axios.post(
        "http://localhost:5000/biopediaquiz/create",
        data
      );

      alert("Quiz created successfully!");
      console.log("Response:", res.data);

      setTitle("");
      setDescription("");
      setQuestions(
        Array.from({ length: 5 }, () => ({
          question: "",
          options: ["", "", "", ""],
        }))
      );
    } catch (error) {
      console.error("Quiz creation failed:", error);
      alert("Quiz creation failed. Check console.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 p-10 min-h-screen">
      <h1 className="font-bold text-5xl text-[#00A6F5]">
        Admin Biopedia Quiz Create Page
      </h1>

      <div className="bg-white shadow-2xl rounded p-10 mb-4 w-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#00A6F5]">Quiz Title</label>
            <input
              className="shadow border rounded py-2 px-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter quiz title"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#00A6F5]">Description</label>
            <input
              className="shadow border rounded py-2 px-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter quiz description"
              required
            />
          </div>

          {questions.map((q, index) => (
            <div key={index} className="border p-5 rounded shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-[#00A6F5]">
                Question {index + 1}
              </h3>

              <input
                className="shadow border rounded py-2 px-3 mb-3 w-full"
                placeholder={`Enter question ${index + 1}`}
                value={q.question}
                onChange={(e) =>
                  handleQuestionChange(index, e.target.value)
                }
                required
              />

              <label className="font-semibold mb-2 block">Options</label>

              {q.options.map((opt, optIndex) => (
                <input
                  key={optIndex}
                  className="shadow border rounded py-2 px-3 mb-2 w-full"
                  placeholder={`Option ${optIndex + 1}`}
                  value={opt}
                  onChange={(e) =>
                    handleOptionChange(index, optIndex, e.target.value)
                  }
                  required
                />
              ))}
            </div>
          ))}

          <button
            className="bg-[#00A6F5] hover:bg-[#0b81cb] text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
