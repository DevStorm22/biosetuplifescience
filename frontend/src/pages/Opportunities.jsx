import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    axios.get("/api/opportunity")
  .then((res) => {
    console.log(res.data);
    setOpportunities(res.data);
  })
  .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-10">
      <h1 className="text-[#00A6F5] text-6xl font-bold">Opportunities Page</h1>
      <div className="flex flex-row flex-wrap bg-white gap-8 p-5 shadow-2xl rounded-2xl items-center justify-center">
        {opportunities.map((opportunity) => (
          <div key={opportunity._id} className="flex flex-col w-100 gap-5 p-5 justify-center items-center rounded-2xl shadow-2xl">
            <h2 className="text-4xl text-[#00A6F5] font-semibold">{opportunity.title}</h2>
            <p className="text-xl">{opportunity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
