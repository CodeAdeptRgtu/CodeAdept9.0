import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "./Timeline.css";

export const Timeline = () => {
  const timelineData = [
    {
      date: "Sep 30, 2025",
      title: "Registration Opens",
      texts: [
        "Start your journey by registering for CodeAdept 9.0.",
        "Registration opens on Sep 30, 2025.",
        "Last date to register is Oct 09, 2025.",
        "Contest links will be shared via email.",
      ],
    },
    {
      date: "Sep 30, 2025",
      title: "Mock Test",
      texts: [
        "Includes 10 aptitude and 10 coding questions.",
        "Duration: 120 minutes.",
        "The mock test will help you get familiar with the format and prepare better.",
      ],
    },
    {
      date: "Oct 11, 2025",
      title: "Round 1",
      texts: [
        "Aptitude & Reasoning: 30 questions.",
        "Duration: 45 minutes.",
        "This round evaluates logical reasoning, problem-solving, and technical aptitude.",
      ],
    },
    {
      date: "Oct 12, 2025",
      title: "Round 2",
      texts: [
        "Coding Challenges: 6 questions.",
        "Duration: 90 minutes.",
        "This round focuses on debugging and solving intermediate-level coding problems.",
      ],
    },
    {
      date: "Oct 13, 2025",
      title: "Final Round",
      texts: [
        "Core Coding Challenges: 5 questions.",
        "Duration: 90 minutes.",
        "Choose your preferred programming language and tackle advanced coding challenges.",
      ],
    },
    {
      date: "Stay Tuned",
      title: "Results & Prize Distribution",
      texts: [
        "Results will be shared via email.",
        "Prize distribution will be conducted at the IT Department, UIT RGPV.",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(".timeline-card-wrapper")
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="timeline-section" id="timeline">
      <Container>
        <Row>
          <Col size={12}>
            <h2 className="timeline-title">Outline Of The Event</h2>
            <div className="timeline-cards">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-card-wrapper ${
                    index % 2 === 0 ? "odd" : "even"
                  }`}
                >
                  <div className="timeline-card">
                    <div className="timeline-date">{item.date}</div>
                    <h3 className="timeline-card-title">{item.title}</h3>
                    {item.texts.map((text, idx) => (
                      <p key={idx} className="timeline-card-text">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
