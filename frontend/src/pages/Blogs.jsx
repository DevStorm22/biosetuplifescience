import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../components/Blog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("/api/blog")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-col p-5 gap-5 justify-center items-center">
      <h1 className="text-6xl font-bold text-[#00A6F5]">Blog Page</h1>
      <div className="flex flex-row flex-wrap gap-8 p-5 items-center justify-center">
        {blogs.map((blog) => (
          <div key={blog._id} className="flex flex-col gap-5 p-5 items-center justify-center w-100 rounded-2xl">
            <Blog key={blog._id} title={blog.title} description={blog.description} link={blog.link} />
          </div>
        ))}
      </div>
    </div>
  );
}
