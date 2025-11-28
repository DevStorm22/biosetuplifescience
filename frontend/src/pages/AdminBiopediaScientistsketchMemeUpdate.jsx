import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBiopediaScientistsketchMemeUpdate() {
  const [memes, setMemes] = useState([]);
  const [selectedMemeId, setSelectedMemeId] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const API_BASE = "http://localhost:5000/biopediascientistsketchmeme";

  // Fetch all memes
  const fetchMemes = async () => {
    try {
      const res = await axios.get(`${API_BASE}/`);
      setMemes(res.data);
    } catch (err) {
      console.error("Fetch memes error:", err);
      setMessage("Failed to load memes.");
    }
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  // When meme is selected
  const handleSelect = (id) => {
    setSelectedMemeId(id);
    const selected = memes.find((m) => m._id === id);
    if (selected) {
      setTitle(selected.title);
      setFile(null); // reset file input
    }
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedMemeId) {
      setMessage("Please select a meme to update.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      if (file) formData.append("meme", file);

      await axios.patch(`${API_BASE}/update/${selectedMemeId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Meme updated successfully!");
      setSelectedMemeId("");
      setTitle("");
      setFile(null);
      fetchMemes(); // Refresh list
    } catch (err) {
      console.error("Update meme error:", err);
      setMessage("Failed to update meme.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-[#00A6F5]">Update Scientist Sketch Meme</h1>

      {message && (
        <div className="mb-4 p-3 bg-gray-100 text-center border rounded-md w-96">
          {message}
        </div>
      )}

      <form
        className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl max-w-3xl"
        onSubmit={handleSubmit}
      >
        {/* Select Meme */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Meme to Update
          </label>
          <select
            value={selectedMemeId}
            onChange={(e) => handleSelect(e.target.value)}
            className="form-select mt-1 w-full border-gray-300 rounded-md border p-2"
            required
          >
            <option value="">Select Meme</option>
            {memes.map((m) => (
              <option key={m._id} value={m._id}>
                {m.title}
              </option>
            ))}
          </select>
        </div>

        {/* Current Image */}
        {selectedMemeId && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Current Meme</label>
            <img
              src={`http://localhost:5000/${memes.find((m) => m._id === selectedMemeId)?.meme}`}
              alt="Selected Meme"
              className="max-w-full h-auto border rounded"
            />
          </div>
        )}

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Meme Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            required
          />
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Update Meme Image (optional)</label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-[#00A6F5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Meme
        </button>
      </form>
    </div>
  );
}
