import { useNavigate } from "react-router-dom";
export default function AdminTeam() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-15">
      <h1 className="font-bold text-5xl text-[#00A6F5]">Admin Team Page</h1>
      <p className="text-lg">
        Welcome to the admin team dashboard. Here you can manage the team
        members.
      </p>
      <div className="flex flex-row gap-30 p-10 flex-wrap justify-center items-center">
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/team/create")}
        >
          Add Team Member
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/team/delete")}
        >
          Delete Team Member
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/team/update")}
        >
          Update Team Member
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/team/view")}
        >
          View Team Member
        </div>
      </div>
    </div>
  );
}
