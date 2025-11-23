import { useState } from "react";
import BiopediaJobPharma from "./BiopediaJobPharma";
import BiopediaJobPhD from "./BiopediaJobPhD";
import BiopediaJobInternship from "./BiopediaJobInternship";
import BiopediaJobFellowship from "./BiopediaJobFellowship";
import BiopediaJobResearch from "./BiopediaJobResearch";
export default function BiopediaJob() {
  const [choice, setChoice] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center p-5 gap-5">
      <div className="flex flex-row justify-between items-center gap-5 p-5 w-[95%] rounded-2xl">
        <div
          className="flex flex-col w-70 justify-center items-center p-5 text-3xl font-semibold text-white bg-[#00A6F5] rounded-2xl cursor-pointer"
          onClick={() => setChoice(1)}
        >
          Pharma
        </div>
        <div
          className="flex flex-col w-70 justify-center items-center p-5 text-3xl font-semibold text-white bg-[#00A6F5] rounded-2xl cursor-pointer"
          onClick={() => setChoice(2)}
        >
          PhD
        </div>
        <div
          className="flex flex-col w-70 justify-center items-center p-5 text-3xl font-semibold text-white bg-[#00A6F5] rounded-2xl cursor-pointer"
          onClick={() => setChoice(3)}
        >
          Internship
        </div>
        <div
          className="flex flex-col w-70 justify-center items-center p-5 text-3xl font-semibold text-white bg-[#00A6F5] rounded-2xl cursor-pointer"
          onClick={() => setChoice(4)}
        >
          Fellowship
        </div>
        <div
          className="flex flex-col w-70 justify-center items-center p-5 text-3xl font-semibold text-white bg-[#00A6F5] rounded-2xl cursor-pointer"
          onClick={() => setChoice(5)}
        >
          Research
        </div>
      </div>
      {choice === 1 ? (
        <BiopediaJobPharma />
      ) : choice === 2 ? (
        <BiopediaJobPhD />
      ) : choice === 3 ? (
        <BiopediaJobInternship />
      ) : choice === 4 ? (
        <BiopediaJobFellowship />
      ) : choice === 5 ? (
        <BiopediaJobResearch />
      ) : (
        ""
      )}
    </div>
  );
}
