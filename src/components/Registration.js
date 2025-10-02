import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    number: "",
    graduation: "",
    college: "",
    otherCollege: "", // added for Other college input
    branch: "",
    skills: [],
    otherSkill: "",
    studentId: "",
    prefferedlanguages: "",
  });

  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const availableSkills = [
    "DSA/CP",
    "CYBERSECURITY",
    "WEB DEVELOPMENT",
    "APP DEVELOPMENT",
    "BLOCKCHAIN",
    "AI/ML",
    "DATA SCIENCE",
    "Other",
  ];

  const graduationYears = ["2026", "2027", "2028", "2029"];
  const preferredLanguages = [
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "C",
    "Other",
  ];
  const colleges = ["UIT RGPV", "SOIT RGPV", "Other"]; // added Other
  const branches = [
    { short: "CSE", full: "Computer Science and Engineering" },
    { short: "IT", full: "Information Technology" },
    { short: "EXE", full: "Electrical Engineering" },
    { short: "ECE", full: "Electronics and Communication Engineering" },
    { short: "ME", full: "Mechanical Engineering" },
    { short: "CE", full: "Civil Engineering" },
    { short: "AU", full: "Automobile Engineering" },
    { short: "PCT", full: "Petrochemical Technology" },
    { short: "CS(AI/ML)", full: "Computer Science (AI/ML)" },
    { short: "CS(DS)", full: "Computer Science (Data Science)" },
    { short: "CSBS", full: "Computer Science and Business Systems" },
  ];

  useEffect(() => {
    const loadReCaptcha = () => {
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?render=6LcpSGUqAAAAAFfQKc6O-qAz9FkUCjcesz-9qPQT";
      script.async = true;
      document.body.appendChild(script);
    };
    loadReCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    for (const key in formData) {
      if (
        (formData[key] === "" || formData[key].length === 0) &&
        key !== "otherSkill" &&
        key !== "otherCollege"
      ) {
        toast.error(
          `${key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())} is required.`
        );
        return false;
      }
    }

    if (formData.college === "Other" && formData.otherCollege.trim() === "") {
      toast.error("Please enter your college name.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailId.trim())) {
      toast.error("Invalid email address");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.number.trim())) {
      toast.error("Phone number must be 10 digits.");
      return false;
    }

    return true;
  };

  const checkUniqueFields = async () => {
    const { emailId, number } = formData;
    const emailQuery = query(
      collection(db, "registrations"),
      where("emailId", "==", emailId)
    );
    const numberQuery = query(
      collection(db, "registrations"),
      where("number", "==", number)
    );

    try {
      const [emailSnapshot, numberSnapshot] = await Promise.all([
        getDocs(emailQuery),
        getDocs(numberQuery),
      ]);
      if (!emailSnapshot.empty) {
        toast.error("Email already registered");
        return false;
      }
      if (!numberSnapshot.empty) {
        toast.error("Phone number already registered");
        return false;
      }
    } catch (error) {
      console.error("Error checking unique fields: ", error);
      toast.error("An error occurred while checking for uniqueness.");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      const token = await window.grecaptcha.execute(
        "6LcpSGUqAAAAAFfQKc6O-qAz9FkUCjcesz-9qPQT",
        { action: "submit" }
      );
      setRecaptchaToken(token);

      const isUnique = await checkUniqueFields();
      if (!isUnique) return;

      const skillsString = [
        ...formData.skills.filter((s) => s !== "Other"),
        ...(formData.skills.includes("Other") && formData.otherSkill
          ? [formData.otherSkill]
          : []),
      ].join(", ");

      const finalCollege =
        formData.college === "Other" && formData.otherCollege
          ? formData.otherCollege
          : formData.college;

      const docRef = await addDoc(collection(db, "registrations"), {
        ...formData,
        college: finalCollege,
        skills: skillsString,
        recaptchaToken: token,
      });

      console.log("Document written with ID: ", docRef.id);

      setFormData({
        fullName: "",
        emailId: "",
        number: "",
        graduation: "",
        college: "",
        otherCollege: "",
        branch: "",
        skills: [],
        otherSkill: "",
        studentId: "",
        prefferedlanguages: "",
      });

      toast.success("Registration Successful");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("An error occurred during registration.");
    }
  };

  const displayLabels = {
    fullName: "Full Name",
    emailId: "Email Address",
    number: "Phone Number",
    graduation: "Graduation Year",
    college: "College Name",
    branch: "Branch of Study",
    skills: "Skills",
    studentId: "Student ID (Enrollment no.)",
    prefferedlanguages: "Preferred Language",
  };

  return (
    <form onSubmit={handleRegister} className="registration-form">
      <h3 className="registration-form__title">CodeAdept 9.0 Registration</h3>

      {Object.keys(formData).map(
        (key) =>
          key !== "otherSkill" &&
          key !== "otherCollege" && (
            <div className="registration-form__field" key={key}>
              <label htmlFor={key}>{displayLabels[key]}</label>

              {key === "graduation" ? (
                <select
                  id={key}
                  className="registration-form__input"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                >
                  <option value="">Select Graduation Year</option>
                  {graduationYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              ) : key === "prefferedlanguages" ? (
                <select
                  id={key}
                  className="registration-form__input"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                >
                  <option value="">Select Preferred Language</option>
                  {preferredLanguages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              ) : key === "college" ? (
                <>
                  <select
                    id={key}
                    className="registration-form__input"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                  >
                    <option value="">Select College</option>
                    {colleges.map((college) => (
                      <option key={college} value={college}>
                        {college}
                      </option>
                    ))}
                  </select>
                  {formData.college === "Other" && (
                    <input
                      type="text"
                      className="registration-form__input mt-2"
                      placeholder="Enter your college name"
                      value={formData.otherCollege}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          otherCollege: e.target.value,
                        }))
                      }
                    />
                  )}
                </>
              ) : key === "branch" ? (
                <select
                  id={key}
                  className="registration-form__input"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                >
                  <option value="">Select Branch</option>
                  {branches.map((branch) => (
                    <option key={branch.short} value={branch.short}>
                      {branch.full} ({branch.short})
                    </option>
                  ))}
                </select>
              ) : key === "skills" ? (
                <div className="skills-container">
                  {availableSkills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      className={`skill-btn ${
                        formData.skills.includes(skill) ? "selected" : ""
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          skills: prev.skills.includes(skill)
                            ? prev.skills.filter((s) => s !== skill)
                            : [...prev.skills, skill],
                        }))
                      }
                    >
                      {skill}
                    </button>
                  ))}
                  {formData.skills.includes("Other") && (
                    <input
                      type="text"
                      className="registration-form__input mt-2"
                      placeholder="Enter your skill"
                      value={formData.otherSkill}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          otherSkill: e.target.value,
                        }))
                      }
                    />
                  )}
                </div>
              ) : (
                <input
                  id={key}
                  className="registration-form__input"
                  name={key}
                  placeholder={displayLabels[key]}
                  value={formData[key]}
                  onChange={handleChange}
                />
              )}
            </div>
          )
      )}

      {error && <p className="error-message">{error}</p>}

      <div className="registration-form__submit">
        <button type="submit" className="registration-form__button">
          Register
        </button>
        <ToastContainer />
      </div>
    </form>
  );
}

export default Registration;
