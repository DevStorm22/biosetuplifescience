import { useEffect } from "react";
import axios from "axios";
export default function AdminBiopediaJobFellowshipDelete() {
  useEffect(() => {
    axios.delete("http://localhost:3000/biopediajobsfellowship/delete")
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete("http://localhost:3000/biopediajobsfellowship/delete", {
      jobId: e.target.jobId.value,
    })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Biopedia Job Fellowship Delete Page</h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobId"
          >
            Job ID
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="jobId"
            name="jobId"
            placeholder="Enter job ID to delete"
            required
          />
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Delete Job Fellowship
        </button>
      </form>
    </div>
  );
}
