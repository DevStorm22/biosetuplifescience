import { useState } from "react";
import BiopediaScientistsketchPhoto from "./BiopediaScientistsketchPhoto";
import BiopediaScientistsketchMeme from "./BiopediaScientistsketchMeme";
import BiopediaScientistsketchVideo from "./BiopediaScientistsketchVideo";
export default function BiopediaSciemtistsketch() {
  const [choice, setChoice] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-8">
      <div className="flex flex-row justify-between items-center gap-3 p-5 w-[95%] rounded-2xl">
        <div
          className="flex flex-col w-[30%] justify-center items-center p-5 text-3xl font-semibold text-white bg-[#00A6F5] rounded-2xl cursor-pointer"
          onClick={() => setChoice(1)}
        >
          Photo
        </div>
        <div
          className="flex flex-col w-[30%] justify-center items-center p-5 text-3xl font-semibold text-white bg-[#00A6F5] rounded-2xl cursor-pointer"
          onClick={() => setChoice(2)}
        >
          Meme
        </div>
        <div
          className="flex flex-col w-[30%] justify-center items-center p-5 text-3xl font-semibold text-white bg-[#00A6F5] rounded-2xl cursor-pointer"
          onClick={() => setChoice(3)}
        >
          Video
        </div>
      </div>
      {choice === 1 ? (
        <BiopediaScientistsketchPhoto />
      ) : choice === 2 ? (
        <BiopediaScientistsketchMeme />
      ) : choice === 3 ? (
        <BiopediaScientistsketchVideo />
      ) : (
        ""
      )}
    </div>
  );
}
