import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="info-section">
      {/* Mission & Vision */}
      <div className="info-cards">
        <div className="card">
          <h2 className="card-title">Mission</h2>
          <p className="card-text">
            Our mission is to consistently work towards delivering the finest
            platform for both the current and upcoming generations of students
            and to create additional opportunities for students to challenge
            themselves.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Vision</h2>
          <p className="card-text">
            Our focus is on nurturing the fundamental knowledge and
            problem-solving abilities of programmers. Our goal is to offer
            students, a wide array of experiences, allowing them to recognize
            their outstanding technical skills and problem-solving potential.
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="overview-card card">
        <h2 className="card-title">Competition Overview</h2>
        <p className="card-text">
          Hosted by the Department of Information Technology (DoIT), CodeAdept
          9.0 is a coding competition where the best coders showcase their
          skills. Participate, learn, and challenge yourself through multiple
          rounds of problem-solving and coding excellence.
        </p>
      </div>

      {/* Rounds */}
      <div className="rounds">
        <div className="round-card card">
          <h3 className="round-title">Round 1: ONLINE ASSESSMENT</h3>
          <p className="card-text">
            The journey begins with an online assessment designed to test your
            aptitude and basic coding skills. This round includes 45 MCQs
            covering logical reasoning, analytical thinking, and programming
            fundamentals. Duration: 45 minutes.
          </p>
        </div>

        <div className="round-card card">
          <h3 className="round-title">
            Round 2: CODING ROUND - Technical Round 1
          </h3>
          <p className="card-text">
            This round focuses on Data Structures & Algorithms (DSA). Solve 6
            problem statements to test problem-solving skills, algorithmic
            knowledge, and writing optimized code. Duration: 90 minutes.
          </p>
        </div>

        <div className="round-card card">
          <h3 className="round-title">
            Round 3: ONSITE CODING SPRINT - Technical Round 2
          </h3>
          <p className="card-text">
            The ultimate offline coding showdown! Compete face-to-face against
            top coders in a high-pressure environment. Solve 4 advanced DSA
            problems within 90 minutes. Only the best coders will emerge
            victorious.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
