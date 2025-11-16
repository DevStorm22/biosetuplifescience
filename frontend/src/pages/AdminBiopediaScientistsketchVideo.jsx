import { useNavigate } from "react-router-dom";
export default function AdminBiopediaScientistsketchVideo() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-15 min-h-screen">
      <h1 className="font-bold text-5xl text-[#00A6F5]">
        Admin Biopedia Scientist Sketch Video Page
      </h1>
      <p className="text-lg">
        Welcome to the admin Biopedia Scientist Sketch Video dashboard. Here you
        can manage the Scientist Sketch Videos.
      </p>
      <div className="flex flex-row gap-30 p-10 flex-wrap justify-center items-center">
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() =>
            navigate("/admin/biopedia/scientistsketch/video/create")
          }
        >
          Add Video Scientist Sketch
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() =>
            navigate("/admin/biopedia/scientistsketch/video/delete")
          }
        >
          Delete Video Scientist Sketch
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() =>
            navigate("/admin/biopedia/scientistsketch/video/update")
          }
        >
          Update Video Scientist Sketch
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/scientistsketch/video/view")}
        >
          View Video Scientist Sketch
        </div>
      </div>
    </div>
  );
}
