export default function AdminEventView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Event View Page</h1>
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Event Title</th>
              <th className="px-4 py-2 border">Event Description</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Science Fair</td>
              <td className="px-4 py-2 border">
                Science Fair ljsdh sdjvskjdnvksdv sjkdvhaklsdbvuaysgv
              </td>
              <td className="px-4 py-2 border">2024-07-15</td>
              <td className="px-4 py-2 border">New York</td>
              <td className="px-4 py-2 border">
                https://sciencefair.example.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
