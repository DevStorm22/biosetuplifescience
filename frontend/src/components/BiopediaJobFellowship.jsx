import { useEffect, useState } from "react";
export default function BiopediaJobFellowship() {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = () => {
    fetch("http://localhost:5000/biopediajobsfellowship/")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => console.log("Fetch error:", err));
  };
  useEffect(() => {
    fetchJobs();
    const interval = setInterval(fetchJobs, 120000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-6xl font-bold mb-4 text-[#00A6F5]">
        Biopedia Job Fellowship
      </h1>

      <div className="bg-white p-5 rounded-xl flex flex-row flex-wrap gap-5 items-start justify-center">
        {jobs.length === 0 ? (
          <p className="text-gray-500 text-xl">Loading jobs…</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className="flex flex-col bg-[#00A6F5] gap-5 p-6 items-center justify-center w-100 rounded-2xl text-white"
            >
              <h1 className="text-2xl font-semibold text-center">{job.title}</h1>
              <p className="text-lg text-center">{job.description}</p>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-[#00A6F5] bg-white font-semibold text-2xl p-2 rounded-2xl cursor-pointer">
                  Apply Here
                </button>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
