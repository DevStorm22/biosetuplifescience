export default function AdminOpportunitiesView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Opportunities View Page</h1>
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Opportunity ID</th>
              <th className="px-4 py-2 border">Opportunity Title</th>
              <th className="px-4 py-2 border">Opportunity Description</th>
              <th className="px-4 py-2 border">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">Opportunity 1</td>
              <td className="px-4 py-2 border">
                Science Fair ljsdh sdjvskjdnvksdv sjkdvhaklsdbvuaysgv
              </td>
              <td className="px-4 py-2 border">
                <a
                  href="https://www.example.com/opportunity1"
                  className="text-blue-500 underline"
                >
                  View Opportunity
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
