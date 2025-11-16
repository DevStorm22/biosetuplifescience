export default function AdminBiopediaJobResearchUpdate() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Update Job Research</h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="job-id"
          >
            Job ID
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="job-id"
            name="job-id"
            placeholder="Enter job ID to update"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="job-title"
          >
            Job Title
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="job-title"
            name="job-title"
            placeholder="Enter job title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="job-description"
          >
            Job Description
          </label>
          <textarea
            className="form-textarea mt-1 w-full border-gray-300 rounded-md border p-2"
            id="job-description"
            name="job-description"
            placeholder="Enter job description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="job-link"
          >
            Job Link
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="job-link"
            name="job-link"
            placeholder="Enter job link"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#00A6F5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
}
