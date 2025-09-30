import img from "../assets/img/arpit.jpg";
import img2 from "../assets/img/sachin.jpg";
import img3 from "../assets/img/hod.jpg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2>Faculty Coordinators</h2>
          <p>Meet the supportive faculty of DoIT Coding Club</p>
          <div className="faculty-row">
            <div className="item">
              <div className="card">
                <img src={img3} alt="Dr. Asmita Moghe" />
                <div className="card-info">
                  <h5>Dr. ASMITA A MOGHE</h5>
                  <p>Head of Department</p>
                  <span className="faculty-institute">
                    DoIT, UIT RGPV Bhopal
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src={img2} alt="Dr. Sachin Goyal" />
                <div className="card-info">
                  <h5>Dr. SACHIN GOYAL</h5>
                  <p>Head of Coding Club</p>
                  <span className="faculty-institute">
                    DoIT, UIT RGPV Bhopal
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src={img} alt="Prof. Arpit Namdev" />
                <div className="card-info">
                  <h5>Prof. ARPIT NAMDEV</h5>
                  <p>Head of Coding Club</p>
                  <span className="faculty-institute">
                    DoIT, UIT RGPV Bhopal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
