import instagramWhite from "../assets/images/instagram-brands-solid-full.svg";
import linkedinWhite from "../assets/images/linkedin-brands-solid-full.svg";
import emailWhite from "../assets/images/envelope-solid-full.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-800 text-white py-6 mt-10 gap-5">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2025 Biosetup Lifescience. All rights reserved.
        </p>
      </div>

      <div className="flex flex-row w-full justify-between px-10">
        <div className="flex flex-row">
          <div className="flex flex-col px-5 items-end justify-center">
            <ul className="list-none">
              <li className="font-semibold text-[#00A6F5] text-2xl flex flex-row gap-2 items-center">
                <img className="w-10 h-10" src={instagramWhite} />
                <a
                  className="underline-0"
                  href="https://www.instagram.com/biosetup_lifesciences?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
                  Instagram
                </a>
              </li>

              <li className="font-semibold text-[#00A6F5] text-2xl flex flex-row gap-2 items-center">
                <img className="w-10 h-10" src={linkedinWhite} />
                <a className="underline-0" href="#">
                  LinkedIn
                </a>
              </li>

              <li className="font-semibold text-[#00A6F5] text-2xl flex flex-row gap-2 items-center">
                <img className="w-10 h-10" src={emailWhite} />
                <a className="underline-0" href="#">
                  E-mail
                </a>
              </li>
            </ul>
          </div>
          <div className="border-2 border-white"></div>
          <div className="flex flex-col p-5 items-start justify-center">
            <ul className="list-none">
              <li className="font-semibold text-[#00A6F5] text-md flex flex-row gap-2 items-center">
                <Link className="underline-0" to="/">
                  Home
                </Link>
              </li>
              <li className="font-semibold text-[#00A6F5] text-md flex flex-row gap-2 items-center">
                <Link className="underline-0" to="/about">
                  About
                </Link>
              </li>
              <li className="font-semibold text-[#00A6F5] text-md flex flex-row gap-2 items-center">
                <Link className="underline-0" to="/event">
                  Event
                </Link>
              </li>
              <li className="font-semibold text-[#00A6F5] text-md flex flex-row gap-2 items-center">
                <Link className="underline-0" to="/team">
                  Team
                </Link>
              </li>
              <li className="font-semibold text-[#00A6F5] text-md flex flex-row gap-2 items-center">
                <Link className="underline-0" to="/biopedia">
                  Biopedia
                </Link>
              </li>
              <li className="font-semibold text-[#00A6F5] text-md flex flex-row gap-2 items-center">
                <Link className="underline-0" to="/opportinities">
                  Opportunities
                </Link>
              </li>
              <li className="font-semibold text-[#00A6F5] text-md flex flex-row gap-2 items-center">
                <Link className="underline-0" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="font-semibold text-[#00A6F5] text-md flex flex-row gap-2 items-center">
                <Link className="underline-0" to="/newsletters">
                  Newsletters
                </Link>
              </li>
              <li className="font-semibold text-[#00A6F5] text-md flex flex-row gap-2 items-center">
                <Link className="underline-0" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[50%] items-end justify-center">
          <div className="flex flex-col">
            <h2 className="text-[#00A6F5] text-xl font-semibold">
              Biosetup Linfesciences
            </h2>
            <p className="text-white text-md items-end">
              Biosetup Life Sciences is where curiosity meets creation. We’re
              shaping the next generation of life science professionals through
              research-driven learning, hands-on training and bridging the gap
              between research and industry. With a team of passionate mentors,
              we turn knowledge into innovation and ideas into impact.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center">
        <p className="text-sm">Developed by ErrorBite.</p>
      </div>
    </div>
  );
}
