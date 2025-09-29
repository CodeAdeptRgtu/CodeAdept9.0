import { Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, linkedin }) => {
  return (
    <Col size={12} xs={6} sm={3} md={3}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="team member" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className="italic">{description}</div>
          <a href={linkedin ? linkedin : "#"}target="_blank" rel="noreferrer">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </Col>
  );
};

// import { Col, Card, Button } from "react-bootstrap";
// import { useState } from "react";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Col size={12} sm={12} md={4}>
//       <Card
//         className="project-card"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={{
//           transform: isHovered ? "scale(1.05)" : "scale(1)",
//           transition: "transform 0.3s ease-in-out",
//           cursor: "pointer",
//         }}
//       >
//         <Card.Img variant="top" src={imgUrl} />
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           {/* <Button variant="primary" href="#learn-more">
//             Learn More
//           </Button> */}
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };
