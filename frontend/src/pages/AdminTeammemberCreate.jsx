export default function AdminTeamMemberCreate() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Create New Team Member</h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="team-member-title"
          >
            Team Member Title
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="team-member-title"
            name="team-member-title"
            placeholder="Enter team member title (Mr./Ms./Dr.)"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="team-member-name"
          >
            Team Member Name
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="team-member-name"
            name="team-member-name"
            placeholder="Enter team member name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="team-member-username"
          >
            Team Member Username
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="team-member-username"
            name="team-member-username"
            placeholder="Enter team member username"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="team-member-role"
          >
            Team Member Role
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="team-member-role"
            name="team-member-role"
            placeholder="Enter team member role"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="team-member-email"
          >
            Team Member Email
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="email"
            id="team-member-email"
            name="team-member-email"
            placeholder="Enter team member email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="team-member-phone"
          >
            Team Member Phone
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="tel"
            id="team-member-phone"
            name="team-member-phone"
            placeholder="Enter team member phone"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#00A6F5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Team Member
          </button>
        </div>
      </form>
    </div>
  );
}
