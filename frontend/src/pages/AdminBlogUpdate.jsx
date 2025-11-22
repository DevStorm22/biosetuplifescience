export default function AdminBlogUpdate() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Blog Update Page</h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter blog title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter blog description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium">
            Author
          </label>
          <input
            type="text"
            id="author"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter author name"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md">
          Update Blog
        </button>
      </form>
    </div>
  );
}
