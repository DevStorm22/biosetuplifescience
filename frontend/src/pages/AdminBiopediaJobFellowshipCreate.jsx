import { useEffect } from "react";
import axios from "axios";
export default function AdminBiopediaJobFellowshipCreate() {
  useEffect(() => {
    axios.get("http://localhost:3000/biopediajobsfellowship/")
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/biopediajobsfellowship/create", {
      title: e.target.jobTitle.value,
      description: e.target.jobDescription.value,
      link: e.target.jobLink.value,
    }
  )
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Biopedia Job Fellowship Create Page</h1>
      <form className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-4xl" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobTitle"
          >
            Job Title
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="Enter job title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobDescription"
          >
            Job Description
          </label>
          <textarea
            className="form-textarea mt-1 w-full border-gray-300 rounded-md border p-2"
            id="jobDescription"
            name="jobDescription"
            placeholder="Enter job description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobLink"
          >
            Job Link
          </label>
          <input
            className="form-input mt-1 w-full border-gray-300 rounded-md border p-2"
            type="text"
            id="jobLink"
            name="jobLink"
            placeholder="Enter job link"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#00A6F5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Job Fellowship
          </button>
        </div>
      </form>
    </div>
  );
}
