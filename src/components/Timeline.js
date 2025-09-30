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
      title: "Round 1: ONLINE ASSESSMENT",
      texts: [
        "The journey begins with an online assessment designed to test your aptitude and basic coding ability.",
        "This round includes 45 MCQs covering various topics.",
        "You’ll have 45 minutes to showcase your logical reasoning, analytical thinking, and programming fundamentals.",
      ],
    },
    {
      date: "Oct 12, 2025",
      title: "Round 2: CODING ROUND - Technical Round 1",
      texts: [
        "This round shifts focus to Data Structures & Algorithms (DSA).",
        "You’ll solve 6 problem statements that evaluate your problem-solving skills, knowledge of algorithms, and efficiency in writing optimized code.",
        "Duration: 90 minutes. It's all about speed, accuracy, and logical depth.",
      ],
    },
    {
      date: "Oct 14, 2025",
      title: "Round 3: ONSITE CODING SPRINT - Technical Round 2",
      texts: [
        "The ultimate offline coding showdown! Compete face-to-face with top coders in a high-pressure environment.",
        "This sprint challenges you with 4 advanced DSA problems to be solved within 90 minutes.",
        "Only the best logical thinkers and coders will emerge victorious.",
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
