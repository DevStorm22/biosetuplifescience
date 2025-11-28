import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBiopediaScientistsketchMemeDelete() {
  const [memes, setMemes] = useState([]);
  const [selectedMemeId, setSelectedMemeId] = useState("");
  const [message, setMessage] = useState("");

  const API_BASE = "http://localhost:5000/biopediascientistsketchmeme";

  // Fetch all memes
  const fetchMemes = async () => {
    try {
      const res = await axios.get(`${API_BASE}/`);
      setMemes(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
      setMessage("Failed to load memes.");
    }
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  // Handle meme selection
  const handleMemeSelect = (id) => {
    setSelectedMemeId(id);
    setMessage(""); // Clear previous messages
  };

  // Handle deletion
  const handleDelete = async (e) => {
    e.preventDefault();
    if (!selectedMemeId) {
      setMessage("Please select a meme to delete.");
      return;
    }

    try {
      await axios.delete(`${API_BASE}/delete/${selectedMemeId}`);
      setMessage("Meme deleted successfully!");

      // Reset selection and refresh meme list
      setSelectedMemeId("");
      fetchMemes();
    } catch (err) {
      console.error("Delete error:", err);
      setMessage("Failed to delete meme: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-red-500">
        Delete Scientist Sketch Meme
      </h1>

      {message && (
        <div className="mb-4 p-3 bg-gray-100 text-center border rounded-md w-96">
          {message}
        </div>
      )}

      <form
        className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl max-w-3xl"
        onSubmit={handleDelete}
      >
        {/* Select Meme */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="meme-select"
          >
            Select Meme to Delete
          </label>
          <select
            id="meme-select"
            value={selectedMemeId}
            onChange={(e) => handleMemeSelect(e.target.value)}
            className="form-select mt-1 w-full border-gray-300 rounded-md border p-2"
            required
          >
            <option value="">Select Meme</option>
            {memes.map((meme) => (
              <option key={meme._id} value={meme._id}>
                {meme.title}
              </option>
            ))}
          </select>
        </div>

        {/* Preview selected meme */}
        {selectedMemeId && (
          <div className="mb-4 flex flex-col items-center">
            <h2 className="font-semibold mb-2">Preview:</h2>
            <img
              src={`http://localhost:5000/${memes.find((m) => m._id === selectedMemeId)?.meme}`}
              alt="Selected Meme"
              className="max-w-full h-auto border rounded"
            />

          </div>
        )}

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete Meme
        </button>
      </form>
    </div>
  );
}
