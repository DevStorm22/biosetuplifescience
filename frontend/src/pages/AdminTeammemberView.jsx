export default function AdminTeammemberView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">View Team Member</h1>
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Username</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Mr.</td>
              <td className="px-4 py-2 border">John Doe</td>
              <td className="px-4 py-2 border">johndoe</td>
              <td className="px-4 py-2 border">Developer</td>
              <td className="px-4 py-2 border">abc@gmail.com</td>
              <td className="px-4 py-2 border">123-456-7890</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
