import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBiopediaJobInternshipUpdate() {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: ""
  });
  const [originalData, setOriginalData] = useState({});
  const [message, setMessage] = useState("");

  const API_BASE = "http://localhost:5000/biopediajobsinternship";

  // Load all jobs on mount
  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/`);
      setJobs(res.data);
    } catch (err) {
      console.log("Fetch error:", err);
      setMessage("Failed to load jobs.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobSelect = (id) => {
    setSelectedJobId(id);

    if (!id) {
      // Reset fields if user deselects
      setFormData({ title: "", description: "", link: "" });
      setOriginalData({});
      return;
    }

    const job = jobs.find((j) => j._id === id);
    if (job) {
      setFormData({
        title: job.title,
        description: job.description,
        link: job.link
      });
      setOriginalData(job);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!selectedJobId) {
      setMessage("Please select a job to update.");
      return;
    }

    // Compare only changed fields
    const updatedFields = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== originalData[key]) {
        updatedFields[key] = formData[key];
      }
    });

    if (Object.keys(updatedFields).length === 0) {
      setMessage("No changes detected.");
      return;
    }

    try {
      await axios.patch(`${API_BASE}/update/${selectedJobId}`, updatedFields);

      setMessage("Job updated successfully.");

      // Refresh job list
      await fetchJobs();

      // Reset form
      setFormData({ title: "", description: "", link: "" });
      setSelectedJobId("");
      setOriginalData({});
    } catch (err) {
      console.log("Update error:", err);
      setMessage("Failed to update job. Error: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Update Job Internship</h1>

      {message && (
        <div className="mb-4 p-3 bg-gray-100 text-center border rounded-md w-96">
          {message}
        </div>
      )}

      <form
        className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl"
        onSubmit={handleSubmit}
      >
        {/* Select Job */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Job to Update
          </label>

          <select
            value={selectedJobId}
            onChange={(e) => handleJobSelect(e.target.value)}
            className="form-select mt-1 w-full border-gray-300 rounded-md border p-2"
            required
          >
            <option value="">Select Job</option>
            {jobs.map((job) => (
              <option key={job._id} value={job._id}>
                {job.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            placeholder="Enter job title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea mt-1 w-full border-gray-300 rounded-md border p-2"
            placeholder="Enter job description"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job Link
          </label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            placeholder="Enter job link"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-[#00A6F5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
}
