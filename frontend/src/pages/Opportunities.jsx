import { useEffect, useState } from "react";
import axios from "axios";

export default function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/opportunity") // FIXED URL
      .then((res) => {
        console.log("API Response:", res.data);

        // Ensure response is an array before setting state
        if (Array.isArray(res.data)) {
          setOpportunities(res.data);
        } else {
          console.error("API did not return an array:", res.data);
          setOpportunities([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-3xl p-10">Loading...</h2>;
  if (error) return <h2 className="text-3xl p-10 text-red-600">{error}</h2>;

  return (
    <div className="flex flex-col justify-center items-center gap-5 p-10">
      <h1 className="text-[#00A6F5] text-6xl font-bold">Opportunities Page</h1>

      <div className="flex flex-row flex-wrap bg-white gap-8 p-5 shadow-2xl rounded-2xl items-center justify-center">
        {opportunities.length === 0 ? (
          <p className="text-xl text-gray-500">No opportunities available.</p>
        ) : (
          opportunities.map((opportunity) => (
            <div
              key={opportunity._id}
              className="flex flex-col w-100 gap-5 p-5 justify-center items-center rounded-2xl shadow-2xl"
            >
              <h2 className="text-4xl text-[#00A6F5] font-semibold">
                {opportunity.title}
              </h2>
              <p className="text-xl">{opportunity.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
