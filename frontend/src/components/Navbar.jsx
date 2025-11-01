import { Link } from "react-router-dom";
import logo from "../assets/images/BIO.png";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center bg-[#00A6F5] text-white p-1.5 rounded-4xl mt-0.5">
      <div className="flex gap-3">
        <img src={logo} />
        <div className="flex flex-col gap-1 items-start justify-center">
          <h1 className="text-[30px] font-bold">Biosetup</h1>
          <h2 className="text-[25px] font-semibold">Lifesciences</h2>
        </div>
      </div>
      <div className="flex justify-center items-center gap-7 text-xl font-bold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/event">Event</Link>
        <Link to="/team">Team</Link>
        <Link to="/biopedia">BioPedia</Link>
        <Link to="/opportunites">Opportunities</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/newsletters">Newsletters</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="/admin">
        <div className="px-4 py-3 text-[#00A6F5] bg-white rounded-4xl font-bold text-center text-2xl mx-3">
          Admin
        </div>
      </Link>
    </div>
  );
}
