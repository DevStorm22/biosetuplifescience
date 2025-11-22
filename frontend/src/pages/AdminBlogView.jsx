export default function AdminBlogView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Blog View Page</h1>
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Blog ID</th>
              <th className="px-4 py-2 border">Blog Title</th>
              <th className="px-4 py-2 border">Blog Description</th>
              <th className="px-4 py-2 border">Blog Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">Blog Title 1</td>
              <td className="px-4 py-2 border">Blog Description 1</td>
              <td className="px-4 py-2 border">Author 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
