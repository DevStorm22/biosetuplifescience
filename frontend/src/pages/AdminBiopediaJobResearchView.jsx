export default function AdminBiopediaJobResearchView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Admin Biopedia Job Research View
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Job ID</th>
              <th className="px-4 py-2 border">Job Title</th>
              <th className="px-4 py-2 border">Job Description</th>
              <th className="px-4 py-2 border">Job Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">Job Title Example</td>
              <td className="px-4 py-2 border">
                Science Fair ljsdh sdjvskjdnvksdv sjkdvhaklsdbvuaysgv
              </td>
              <td className="px-4 py-2 border">
                <a
                  href="https://example.com/job-link"
                  className="text-blue-500 underline"
                >
                  https://example.com/job-link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
