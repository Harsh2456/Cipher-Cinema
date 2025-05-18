import React from "react";
import { FaLinkedin } from "react-icons/fa";
import team1 from "../../img/team1.jpg";
import team2 from "../../img/team2.jpg";
import team3 from "../../img/team3.jpg";
import team4 from "../../img/team4.jpg";
import supriyaMamImg from "../../img/supriya_mam_img.jpg";
export const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Kalpesh Pathode",
      role: "AI & DS",
      image: team1,
      linkedin: "https://www.linkedin.com/in/kalpesh-pathode-b2a409232/",
    },
    {
      name: "Dhanashri Patil",
      role: "AI & DS",
      image: team2,
      linkedin: "https://www.linkedin.com/in/dhanashri-patil07/",
    },
    {
      name: "Harshwardhan Patil",
      role: "AI & DS",
      image: team3,
      linkedin: "https://www.linkedin.com/in/harshwardhan-patil-955706251/",
    },
    {
      name: "Sakshi Deshmukh",
      role: "AI & DS",
      image: team4,
      linkedin: "https://www.linkedin.com/in/sakshi-deshmukh-3094a32b2/",
    },
  ];

  const specialThanks = {
    name: "Prof. Supriya Balote",
    role: "Project Guide",
    image: supriyaMamImg,
    linkedin: "https://www.linkedin.com/in/sakshi-deshmukh-3094a32b2/",
  };
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Meet Our Team</h1>
        <p>The brilliant minds behind AI Video Generator</p>
      </div>

      <div className="team-section">
        <div className="core-team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-inner">
                <div className="team-card-front">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
                <div className="team-card-back">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="special-thanks">
          <h2>Special Thanks To</h2>
          <div className="team-card special-card">
            <div className="team-card-inner">
              <div className="team-card-front">
                <div className="member-image mentor-image">
                  <img src={specialThanks.image} alt={specialThanks.name} />
                </div>
                <h3>{specialThanks.name}</h3>
                <p>{specialThanks.role}</p>
              </div>
              <div className="team-card-back">
                <a
                  href={specialThanks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
