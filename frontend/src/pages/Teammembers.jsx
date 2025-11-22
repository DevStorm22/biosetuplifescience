import instagramWhite from "../assets/images/square-instagram-brands-solid-full.svg";
import instagramBlack from "../assets/images/square-instagram-brands-solid-full (1).svg";
import linkedinWhite from "../assets/images/square-linkedin-brands-solid-full.svg";
import linkedinBlack from "../assets/images/square-linkedin-brands-solid-full (1).svg";
import emailWhite from "../assets/images/envelope-regular-full.svg";
import emailBlack from "../assets/images/envelope-regular-full (1).svg";
import samplePhoto from "../assets/images/wallpaperDevStorm.png";
import { useState } from "react";

export default function TeamMembers() {
  const team = [
    { name: "Kaushik Musale", designation: "Designation" },
    { name: "Kaushik Musale", designation: "Designation" },
    { name: "Kaushik Musale", designation: "Designation" },
    { name: "Kaushik Musale", designation: "Designation" },
    { name: "Kaushik Musale", designation: "Designation" },
    { name: "Kaushik Musale", designation: "Designation" },
  ];

  // hover states per card
  const [hoverIndex, setHoverIndex] = useState(null);
  const [instagramHoverIndex, setInstagramHoverIndex] = useState(null);
  const [linkedinHoverIndex, setLinkedinHoverIndex] = useState(null);
  const [emailHoverIndex, setEmailHoverIndex] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center p-3 gap-5">
      <h1 className="text-[#00A6F5] text-6xl font-bold mt-4">
        Team Members Page
      </h1>

      <div className="flex flex-row flex-wrap shadow-2xl bg-white p-10 rounded-2xl gap-10 items-center justify-center">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col p-7 items-center justify-center gap-2 shadow-2xl rounded-xl
              transition-all duration-300 
              ${hoverIndex === index ? "scale-105 shadow-xl" : ""}
            `}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* MEMBER PHOTO */}
            <div className="w-30 h-30 rounded-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${samplePhoto})` }}
              ></div>
            </div>

            <h1 className="text-2xl text-[#00A6F5] font-bold">{member.name}</h1>
            <h2 className="text-xl font-semibold">{member.designation}</h2>

            {/* SOCIAL LINKS */}
            <div className="flex flex-col gap-3 items-center justify-center">
              {/* INSTAGRAM */}
              <div
                className="flex flex-row justify-center items-center gap-3
                bg-linear-to-r from-[#FEDA75] via-[#FA7E1E] to-[#D62976]
                cursor-pointer rounded-2xl w-65 h-15 p-1
              "
              >
                <div
                  className="bg-white flex flex-row justify-start items-center w-[97.5%] h-[94%] rounded-xl p-2"
                  onMouseEnter={() => setInstagramHoverIndex(index)}
                  onMouseLeave={() => setInstagramHoverIndex(null)}
                >
                  <img
                    className="w-7 h-7"
                    src={
                      instagramHoverIndex === index
                        ? instagramWhite
                        : instagramBlack
                    }
                  />
                  <a href="https://www.instagram.com" target="_blank">
                    mr.kaushikmusale
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div
                className="flex flex-row justify-center items-center gap-3
                bg-linear-to-r from-[#0A66C2] via-[#0E4F94] to-[#004182]
                cursor-pointer rounded-xl w-65 h-15 p-1
              "
              >
                <div
                  className="bg-white flex flex-row justify-start items-center w-[97.5%] h-[94%] rounded-xl p-2"
                  onMouseEnter={() => setLinkedinHoverIndex(index)}
                  onMouseLeave={() => setLinkedinHoverIndex(null)}
                >
                  <img
                    className="w-7 h-7"
                    src={
                      linkedinHoverIndex === index
                        ? linkedinWhite
                        : linkedinBlack
                    }
                  />
                  <a href="www.linkedin.com" target="_blank">
                    Kaushik Musale
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div
                className="flex flex-row justify-center items-center gap-3 cursor-pointer rounded-xl w-65 h-15 p-1
                bg-linear-to-r from-[#FF4E50] via-[#D7263D] to-[#FF4E50]
              "
              >
                <div
                  className="bg-white flex flex-row justify-start items-center w-[97.5%] h-[94%] rounded-xl p-2"
                  onMouseEnter={() => setEmailHoverIndex(index)}
                  onMouseLeave={() => setEmailHoverIndex(null)}
                >
                  <img
                    className="w-7 h-7"
                    src={emailHoverIndex === index ? emailWhite : emailBlack}
                  />
                  <a href="www.mail.google.com" target="_blank">
                    kaushikboss0@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
