import { useNavigate } from "react-router-dom";

export default function AdminBiopediaScientistsketchMeme() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-15 min-h-screen">
      <h1 className="font-bold text-5xl text-[#00A6F5]">
        Admin Biopedia Scientist Sketch Meme Page
      </h1>
      <p className="text-lg">
        Welcome to the admin Biopedia Scientist Sketch Meme dashboard. Here you
        can manage the Scientist Sketch Memes.
      </p>
      <div className="flex flex-row gap-30 p-10 flex-wrap justify-center items-center">
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() =>
            navigate("/admin/biopedia/scientistsketch/meme/create")
          }
        >
          Add Meme Scientist Sketch
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() =>
            navigate("/admin/biopedia/scientistsketch/meme/delete")
          }
        >
          Delete Meme Scientist Sketch
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() =>
            navigate("/admin/biopedia/scientistsketch/meme/update")
          }
        >
          Update Meme Scientist Sketch
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/biopedia/scientistsketch/meme/view")}
        >
          View Meme Scientist Sketch
        </div>
      </div>
    </div>
  );
}
