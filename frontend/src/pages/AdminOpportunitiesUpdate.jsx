export default function AdminOpportunitiesUpdate() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Admin Opportunities Update Page
      </h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter opportunity title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter opportunity description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium">
            Company
          </label>
          <input
            type="text"
            id="company"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter company name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block text-sm font-medium">
            Link
          </label>
          <input
            type="text"
            id="link"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter link to opportunity"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md">
          Update Opportunity
        </button>
      </form>
    </div>
  );
}
