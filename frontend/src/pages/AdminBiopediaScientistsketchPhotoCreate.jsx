export default function AdminBiopediaScientistsketchPhotoCreate() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Add New Scientist Sketch Photo
      </h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo-title"
          >
            Photo Title
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="photo-title"
            name="photo-title"
            placeholder="Enter photo title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo-description"
          >
            Photo Description
          </label>
          <textarea
            className="form-textarea mt-1 w-full border-gray-300 rounded-md border p-2"
            id="photo-description"
            name="photo-description"
            placeholder="Enter photo description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo-title"
          >
            Photo Title
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="file"
            id="photo-upload"
            name="photo-upload"
            accept=".jpg,.jpeg,.png,.pdf"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#00A6F5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Photo
          </button>
        </div>
      </form>
    </div>
  );
}
