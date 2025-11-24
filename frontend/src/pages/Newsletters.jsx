import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../components/Blog";
export default function Newsletters() {
  const [newsletters, setNewsletters] = useState([]);
  useEffect(() => {
    axios.get("/api/newsletter")
      .then((res) => {
        setNewsletters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-col p-5 gap-5 justify-center items-center">
      <h1 className="text-6xl font-bold text-[#00A6F5]">Newsletter Page</h1>
      <div className="flex flex-row flex-wrap gap-8 p-5 items-center justify-center">
        {newsletters.map((newsletter) => (
          <div key={newsletter._id} className="flex flex-col gap-5 p-5 items-center justify-center w-100 rounded-2xl">
            <Blog key={newsletter._id} title={newsletter.title} description={newsletter.description} link={newsletter.link}/>
          </div>
        ))}
      </div>
    </div>
  );
}