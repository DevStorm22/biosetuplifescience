export default function AdminBiopediaScientistsketchVideoCreate() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Add New Scientist Sketch Video
      </h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="video-title"
          >
            Video Title
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="video-title"
            name="video-title"
            placeholder="Enter video title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="video-description"
          >
            Video Description
          </label>
          <textarea
            className="form-textarea mt-1 w-full border-gray-300 rounded-md border p-2"
            id="video-description"
            name="video-description"
            placeholder="Enter video description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="video-title"
          >
            Video Title
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="file"
            id="video-upload"
            name="video-upload"
            accept=".jpg,.jpeg,.png,.pdf"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#00A6F5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Video
          </button>
        </div>
      </form>
    </div>
  );
}
