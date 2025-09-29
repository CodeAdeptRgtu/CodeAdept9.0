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
            We’re here to build the ultimate coding realm where today’s and
            tomorrow’s coders can dig deep, level up, and discover new
            opportunities. Students are encouraged to break barriers, push their
            limits, and unlock their full potential.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Vision</h2>
          <p className="card-text">
            We aim to help coders mine their knowledge and sharpen their
            problem-solving skills. Our goal is to provide students with a range
            of experiences that unlock their hidden technical talents.
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
          <h3 className="round-title">Round 2: Problem-Solving</h3>
          <p className="card-text">
            In the problem-solving round, tackle real-world coding problems that
            push your programming abilities. Demonstrate clean, efficient code
            within time constraints while solving complex algorithmic
            challenges.
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
