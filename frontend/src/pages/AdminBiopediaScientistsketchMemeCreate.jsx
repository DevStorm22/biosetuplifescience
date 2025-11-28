import { useState } from "react";
import axios from "axios";

export default function AdminBiopediaScientistsketchMemeCreate() {
  const [title, setTitle] = useState("");
  const [meme, setMeme] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !meme) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("meme", meme);

    try {
      await axios.post("http://localhost:5000/biopediascientistsketchmeme/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Meme added successfully!");
      setTitle("");
      setMeme(null);
      e.target.reset();
    } catch (err) {
      console.error(err);
      setMessage("Failed to add meme.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Add Scientist Sketch Meme</h1>

      {message && (
        <div className="mb-4 p-3 bg-gray-100 text-center border rounded-md w-96">
          {message}
        </div>
      )}

      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-96" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Meme Title"
          className="form-input border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          className="form-input border p-2 rounded"
          onChange={(e) => setMeme(e.target.files[0])}
          required
        />
        <button
          type="submit"
          className="bg-[#00A6F5] hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Meme
        </button>
      </form>
    </div>
  );
}
