export default function AdminTeammemberDelete() {
  return (
    <div className="flex flex-col gap-5 p-3 justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Delete Team Member</h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter Team member username to delete:
          </label>
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Delete Team Member
        </button>
      </form>
    </div>
  );
}
