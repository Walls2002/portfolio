import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I'm <strong>Wally Gaynor</strong>. a passionate programmer
              and proud graduate of Quezon City University Main with a Bachelor
              of Science in Information Technology. Based in Quezon City,
              Philippines, I have cultivated a strong foundation in various
              programming languages and frameworks, which fuel my love for
              technology and innovation.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              With expertise in React.js, JavaScript, TypeScript, HTML, CSS, and
              proficient use of Bootstrap and Tailwind CSS, I am adept at
              creating dynamic and responsive web applications. My goal is to
              ensure that my projects not only function seamlessly but also
              boast appealing and user-friendly designs.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Programming is not just a career for me; it's a passion. I thrive
              on solving complex problems and continuously learning new
              technologies to keep up with the ever-evolving tech landscape.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
