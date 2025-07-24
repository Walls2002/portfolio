import React from "react";
import {
  ExperienceWrapper,
  ExperienceContainer,
  ExperienceCard,
  CompanyInfo,
  CompanyDetails,
  CompanyName,
  JobTitle,
  Location,
  Duration,
  Description,
  Achievements,
  Achievement,
  TechStack,
  TechTag,
} from "./ExperienceElements";
import ScrollAnimation from "react-animate-on-scroll";

function Experience() {
  const experienceData = [
    {
      company: "Apollo Software Corp.",
      position: "Full Stack Developer",
      location: "Makati City, Philippines",
      duration: "2024 - Present",
      description:
        "Developed and maintained a comprehensive freight tracking and management system, improving operational efficiency and customer satisfaction.",
      achievements: [
        "Develop and maintain full-stack web applications, ensuring seamless integration between front-end interfaces and back-end systems.",
        "Collaborate with cross-functional teams to design, implement, and enhance user-friendly, responsive, and scalable features",
        "Manage a mobile application built with Java and Maven, supporting inventory management processes for 7-Eleven stores and assisting staff in real-time tracking and updates.",
        "Handle development and enhancements for 7-Eleven’s Point of Sale (POS) system, ensuring functionality, reliability, and user efficiency.",
      ],
      technologies: [
        "TypeScript",
        "VueJs",
        "TailwindCSS",
        "Node.js",
        "MySQL",
        "Spring Boot",
        "Java",
      ],
    },
    {
      company: "Freelance Projects",
      position: "Full Stack Developer",
      location: "Remote",
      duration: "2022 - Present",
      description:
        "Worked on various web development projects for local businesses and educational institutions, delivering custom solutions tailored to client needs.",
      achievements: [
        "Developed Point of Sale system for local retail stores",
        "Created attendance monitoring system using barcode technology",
        "Built university student portal with comprehensive information management",
        "Delivered projects on time with 100% client satisfaction rate",
      ],
      technologies: [
        "PHP",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "HTML",
        "CSS",
        "MySQL",
      ],
    },
  ];

  return (
    <ExperienceWrapper id="experience">
      <div className="Container">
        <div className="SectionTitle">Work Experience</div>
        <ExperienceContainer>
          {experienceData.map((exp, index) => (
            <ScrollAnimation
              key={index}
              animateIn="fadeInLeft"
              delay={index * 100}
              animateOnce
            >
              <ExperienceCard>
                <CompanyInfo>
                  <CompanyDetails>
                    <CompanyName>{exp.company}</CompanyName>
                    <JobTitle>{exp.position}</JobTitle>
                    <Location>{exp.location}</Location>
                  </CompanyDetails>
                  <Duration>{exp.duration}</Duration>
                </CompanyInfo>

                <Description>
                  <p>{exp.description}</p>
                </Description>

                <Achievements>
                  {exp.achievements.map((achievement, achIndex) => (
                    <Achievement key={achIndex}>{achievement}</Achievement>
                  ))}
                </Achievements>

                <TechStack>
                  {exp.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ExperienceCard>
            </ScrollAnimation>
          ))}
        </ExperienceContainer>
      </div>
    </ExperienceWrapper>
  );
}

export default Experience;
