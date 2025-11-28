import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBiopediaJobPhDView() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/biopediajobsphd/");

      setJobs(JSON.parse(JSON.stringify(res.data)));

      setLoading(false);
      setError("");
    } catch (err) {
      setError("Failed to fetch job data. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();

    // Auto-refresh every 2 minutes
    const interval = setInterval(() => {
      fetchJobs();
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Admin Biopedia Job PhD View
      </h1>

      {loading && (
        <p className="text-center text-gray-600 mb-4">Loading jobs...</p>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 text-center border rounded-md w-96">
          {error}
        </div>
      )}

      {!loading && jobs.length === 0 && (
        <p className="text-center text-gray-600">No job entries found.</p>
      )}

      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-full max-w-4xl">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Job ID</th>
              <th className="px-4 py-2 border">Job Title</th>
              <th className="px-4 py-2 border">Job Description</th>
              <th className="px-4 py-2 border">Job Link</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{job.title}</td>
                <td className="px-4 py-2 border">{job.description}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {job.link}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
