import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBiopediaJobPharmaDelete() {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState("");
  const [message, setMessage] = useState("");

  const API_BASE = "http://localhost:5000/biopediajobspharma";

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/`);
      setJobs(res.data);
    } catch (err) {
      console.log("Fetch error:", err.message);
      setMessage("Failed to load jobs.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Handle delete
  const handleDelete = async (e) => {
    e.preventDefault();
    if (!selectedJobId) {
      setMessage("Please select a job.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      const res = await axios.delete(`${API_BASE}/delete/${selectedJobId}`);

      setMessage(res.data.message || "Job pharma deleted successfully.");

      setJobs(jobs.filter((job) => job._id !== selectedJobId));

      setSelectedJobId("");
    } catch (err) {
      console.log("Delete error:", err.message);
      setMessage("Error deleting job: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Admin Biopedia Job Pharma Delete Page
      </h1>

      {message && (
        <div className="mb-4 p-3 bg-gray-100 text-center border rounded-md w-96">
          {message}
        </div>
      )}

      <form
        className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-96"
        onSubmit={handleDelete}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobId"
          >
            Select Job to Delete
          </label>

          <select
            id="jobId"
            value={selectedJobId}
            onChange={(e) => setSelectedJobId(e.target.value)}
            required
            className="form-select mt-1 w-full border-gray-300 rounded-md border p-2"
          >
            <option value="">Select Job</option>

            {jobs.map((job) => (
              <option key={job._id} value={job._id}>
                {job.title}
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Delete Job Pharma
        </button>
      </form>
    </div>
  );
}
