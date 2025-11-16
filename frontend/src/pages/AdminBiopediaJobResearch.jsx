import { useNavigate } from "react-router-dom";

export default function AdminBiopediaJobResearch() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-15 min-h-screen">
      <h1 className="font-bold text-5xl text-[#00A6F5]">
        Admin Biopedia Job Research Page
      </h1>
      <p className="text-lg">
        Welcome to the admin Biopedia Job Research dashboard. Here you can
        manage the Job Research entries.
      </p>
      <div className="flex flex-row gap-30 p-10 flex-wrap justify-center items-center">
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/jobs/research/create")}
        >
          Add Job Research
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/jobs/research/delete")}
        >
          Delete Job Research
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/jobs/research/update")}
        >
          Update Job Research
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/jobs/research/view")}
        >
          View Job Research
        </div>
      </div>
    </div>
  );
}
