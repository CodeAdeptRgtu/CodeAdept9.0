import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "./Timeline.css";

export const Timeline = () => {
  const timelineData = [
    {
      date: "Oct 20, 2024",
      title: "Register",
      texts: [
        "Register Yourself At CodeAdept",
        "Registration Starting From Oct 20, 2024",
        "Registration closes on Nov 07, 2024",
        "Mock test and contests link will be shared through email.",
      ],
    },
    {
      date: "Nov 11, 2024",
      title: "Webinar",
      texts: [
        "Pre-competition webinar, where expert will share key strategies and tips to help you thrive in the competition.",
      ],
    },
    {
      date: "Nov 14, 2024",
      title: "Seminar",
      texts: [
        "Join us for an exclusive seminar featuring a distinguished alumni who will share valuable insights and experiences from their professional journey.",
      ],
    },
    {
      date: "Nov 22, 2024",
      title: "Mock Test",
      texts: [
        "Aptitude Question - 10 & Coding Question - 10",
        "Time - 120 Minutes",
        "Mock Test contain mixed questions that will be good for practice.",
      ],
    },
    {
      date: "Nov 23, 2024",
      title: "ROUND 1",
      texts: [
        "Aptitude & Reasoning Questions - 30",
        "Time - 45 Minutes",
        "This round tests your aptitude skills and technical knowledge with no constraints on programming language.",
      ],
    },
    {
      date: "Nov 24, 2024",
      title: "ROUND 2",
      texts: [
        "General Coding Questions - 6",
        "Time - 90 Minutes",
        "This round tests your technical knowledge with basic debugging problems and coding questions.",
      ],
    },
    {
      date: "Nov 26, 2024",
      title: "ROUND 3",
      texts: [
        "Core Coding Questions - 5",
        "Time - 90 Minutes",
        "The final round where you choose your programming weapon and solve challenging coding questions.",
      ],
    },
    {
      date: "Stay Tuned",
      title: "Result Announcement",
      texts: [
        "Result will be shared through email and prize distribution ceremony will be held at IT Department UIT RGPV.",
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
