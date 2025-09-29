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
          is the premier state-level inter-college coding competition where the
          best coders come together for a battle of logic and programming
          mastery. Here is the roadmap guiding you through every step of
          competition.
        </p>
      </div>

      {/* Rounds */}
      <div className="rounds">
        <div className="round-card card">
          <h3 className="round-title">Round 1: Aptitude Test</h3>
          <p className="card-text">
            The journey begins with an online aptitude test to challenge your
            logical reasoning, problem-solving, and analytical skills. This
            round assesses mathematics, logic, and algorithmic thinking.
          </p>
        </div>

        <div className="round-card card">
          <h3 className="round-title">Round 2: Basic Coding</h3>
          <p className="card-text">
            This round focuses on testing your fundamental programming skills.
            Solve beginner-friendly coding tasks that evaluate your knowledge of
            syntax, logic building, and core programming concepts.
          </p>
        </div>

        <div className="round-card card">
          <h3 className="round-title">Round 3: Offline Coding Battle</h3>
          <p className="card-text">
            The ultimate offline showdown! Compete face-to-face against top
            coders, solving advanced algorithmic problems including graph
            theory, segment trees, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
