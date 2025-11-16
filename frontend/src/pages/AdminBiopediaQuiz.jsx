import { useNavigate } from "react-router-dom";
export default function AdminBiopediaQuiz() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-15 min-h-screen">
      <h1 className="font-bold text-5xl text-[#00A6F5]">
        Admin Biopedia Quiz Page
      </h1>
      <p className="text-lg">
        Welcome to the admin Biopedia Quiz dashboard. Here you can manage the
        Quiz entries.
      </p>
      <div className="flex flex-row gap-30 p-10 flex-wrap justify-center items-center">
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/quiz/create")}
        >
          Add Quiz
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/quiz/delete")}
        >
          Delete Quiz
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/quiz/update")}
        >
          Update Quiz
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/quiz/view")}
        >
          View Quiz
        </div>
      </div>
    </div>
  );
}
