export default function AdminBiopediaScientistsketchMemeDelete() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Admin Biopedia Scientist Sketch Meme Delete Page
      </h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="meme-id"
          >
            Meme ID
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="meme-id"
            name="meme-id"
            placeholder="Enter meme ID to delete"
            required
          />
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Delete Meme
        </button>
      </form>
    </div>
  );
}
