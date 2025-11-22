export default function AdminNewsletterView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Newsletter View Page</h1>
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Newsletter ID</th>
              <th className="px-4 py-2 border">Newsletter Title</th>
              <th className="px-4 py-2 border">Newsletter Description</th>
              <th className="px-4 py-2 border">Newsletter Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">Newsletter Title 1</td>
              <td className="px-4 py-2 border">Newsletter Description 1</td>
              <td className="px-4 py-2 border">Author 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
