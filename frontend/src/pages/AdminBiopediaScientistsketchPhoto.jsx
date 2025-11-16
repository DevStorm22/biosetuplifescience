import { useNavigate } from "react-router-dom";
export default function AdminBiopediaScientistsketchPhoto() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-15 min-h-screen">
      <h1 className="font-bold text-5xl text-[#00A6F5]">
        Admin Biopedia Scientist Sketch Photo Page
      </h1>
      <p className="text-lg">
        Welcome to the admin Biopedia Scientist Sketch Photo dashboard. Here you
        can manage the Scientist Sketch Photo entries.
      </p>
      <div className="flex flex-row gap-30 p-10 flex-wrap justify-center items-center">
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() =>
            navigate("/admin/biopedia/scientistsketch/photo/create")
          }
        >
          Add Photo Scientist Sketch
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() =>
            navigate("/admin/biopedia/scientistsketch/photo/delete")
          }
        >
          Delete Photo Scientist Sketch
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() =>
            navigate("/admin/biopedia/scientistsketch/photo/update")
          }
        >
          Update Photo Scientist Sketch
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/scientistsketch/photo/view")}
        >
          View Photo Scientist Sketch
        </div>
      </div>
    </div>
  );
}
