import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBiopediaScientistsketchMemeView() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/biopediascientistsketchmeme"
        );
        setMemes(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch memes.");
        setLoading(false);
      }
    };

    fetchMemes();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Admin Biopedia Scientist Sketch Meme View
      </h1>

      {loading && <p>Loading memes...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Meme ID</th>
                <th className="px-4 py-2 border">Meme Title</th>
                <th className="px-4 py-2 border">Meme Description</th>
                <th className="px-4 py-2 border">Meme</th>
              </tr>
            </thead>
            <tbody>
              {memes.length > 0 ? (
                memes.map((meme, index) => (
                  <tr key={meme._id}>
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{meme.title}</td>
                    <td className="px-4 py-2 border">{meme.description || "-"}</td>
                    <td className="px-4 py-2 border">
                      <img
                        src={`http://localhost:5000/${meme.meme}`}
                        alt={meme.title}
                        className="max-w-full h-auto"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="px-4 py-2 border text-center"
                    colSpan={4}
                  >
                    No memes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
