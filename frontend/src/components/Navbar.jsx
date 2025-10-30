import { Link } from "react-router-dom";
import logo from "../assets/images/BIO.png";

export default function Navbar() {
  return (
    <div className="w-full h-20 flex justify-between items-center bg-[#00A6F5] text-white">
      <div className="p-2">
        <img src={logo} />
      </div>
      <div className="flex justify-center items-center gap-20">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="p-2"></div>
    </div>
  );
}
