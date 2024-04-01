import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import SkillBar from "./Horizontal Skills/TechnicalSkills";

const skillsData = [
  {
    label: "JavaScript",
    percentage: 85,
    style: "progress-line js",
  },
  {
    label: "React",
    percentage: 90,
    style: "progress-line react",
  },
  {
    label: "Bootstrap",
    percentage: 95,
    style: "progress-line boot",
  },
  {
    label: "HTML & CSS",
    percentage: 90,
    style: "progress-line hc",
  },
  {
    label: "Java",
    percentage: 80,
    style: "progress-line java",
  },
];

const Skills = () => {
  const [isInterSected, setIsInterSected] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.15,
    };

    const handleIntersection = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInterSected(true);
        observer.unobserve(entry.target);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__container">
        <div className="skill-title">
          <h1>My Skills_</h1>
        </div>
        <div className="grid">
          <div className="skill-bars">
            <li>Personal Skills</li>
            {skillsData.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                style={isInterSected ? skill.style : ""}
              />
            ))}
          </div>

          <div className="circle__skills">
            <li>Technical Skills</li>
            {skillsData.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                style={isInterSected ? skill.style : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
