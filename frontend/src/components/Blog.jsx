import { Link } from "react-router-dom";

export default function Blog({ title, description, link }) {
  return (
    <div className="flex flex-col gap-5 p-5 items-center justify-center w-100 shadow-2xl rounded-2xl">
      <h1 className="text-[#00A6F5] text-4xl text-center font-semibold">
        {title}
      </h1>
      <p className="text-xl">
        {description}
      </p>
      <Link to={link}>
        <button className="text-2xl text-white bg-[#00A6F5] font-semibold rounded-2xl p-5">
          View More
        </button>
      </Link>
    </div>
  );
}
