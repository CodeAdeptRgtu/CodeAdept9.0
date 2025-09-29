import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import teamImg1 from "../assets/img/ritesh.jpg";
import teamImg2 from "../assets/img/aman.jpg";
import teamImg4 from "../assets/img/mitanshi.jpg";
import teamImg5 from "../assets/img/Bharat.jpg";
import teamImg6 from "../assets/img/uday.jpg";
import teamImg7 from "../assets/img/archita.jpg";
import teamImg8 from "../assets/img/vandana.jpg";
import teamImg9 from "../assets/img/yogiraj.jpg";
import teamImg10 from "../assets/img/aayush.jpg";
import teamImg11 from "../assets/img/shreya.jpg";
import teamImg12 from "../assets/img/sunnidhi.jpg";
import teamImg14 from "../assets/img/sadhvi.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Teams.css";

export const Teams = () => {
  const teams = [
    {
      title: "Ritesh Kushwaha",
      description: "Executive Head",
      imgUrl: teamImg1,
      linkedin: "https://www.linkedin.com/in/riteshkushwaha7",
    },
    {
      title: "Aman Pachouri",
      description: "Executive Head",
      imgUrl: teamImg2,
      linkedin: "https://www.linkedin.com/in/aman-pachouri0205",
    },
    {
      title: "Mitanshi Bhawsar",
      description: "Technical Lead",
      imgUrl: teamImg4,
      linkedin: "",
    },
    {
      title: "Srujan Singh",
      description: "Technical Lead",
      imgUrl: teamImg4,
      linkedin: "https://www.linkedin.com/in/srujan-singh-aa30a6330/",
    },
    {
      title: "Bharat Dangi",
      description: "Web Developer",
      imgUrl: teamImg5,
      linkedin: "https://www.linkedin.com/in/bharat-dangi-b186b3248/",
    },
    {
      title: "Khushi Nigam",
      description: "Management",
      imgUrl: teamImg8,
      linkedin: "https://www.linkedin.com/in/khushi-nigam-5bb81b336/",
    },
    {
      title: "Vandana Patidar",
      description: "Marketing Lead",
      imgUrl: teamImg8,
      linkedin: "https://www.linkedin.com/in/vandana-patidar-232070315",
    },
    {
      title: "Khushi Yadav",
      description: "Graphic Designer",
      imgUrl: teamImg7,
      linkedin: "https://www.linkedin.com/in/khushi-yadav-a3b737332/",
    },
    {
      title: "Yogiraj Patidar",
      description: "Video Editor",
      imgUrl: teamImg9,
      linkedin: "",
    },
    {
      title: "Shreya Patel",
      description: "Volunteer",
      imgUrl: teamImg11,
      linkedin: "",
    },
    {
      title: "Sunidhi Kumari",
      description: "Volunteer",
      imgUrl: teamImg12,
      linkedin: "",
    },
    {
      title: "Mitanshi Bhawsar",
      description: "Volunteer",
      imgUrl: "",
      linkedin: "",
    },
    {
      title: "Sadhvi Ladhave",
      description: "Volunteer",
      imgUrl: teamImg14,
      linkedin: "",
    },
  ];

  return (
    <section className="team" id="team">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Teams</h2>
                  <p>Meet the talented team Members of Codeadept 9.0</p>
                  <Row>
                    {teams.map((team, index) => {
                      return <ProjectCard key={index} {...team} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
