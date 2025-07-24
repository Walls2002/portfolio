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
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              Hello! I'm <strong>Wally Gaynor</strong> a dedicated and
              passionate software developer based in Quezon City, Philippines,
              and a proud graduate of Quezon City University – Main Campus,
              holding a Bachelor of Science in Information Technology.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              I have built a solid foundation in programming through both
              academic training and hands-on development experience. My
              technical skill set includes React.js, JavaScript, TypeScript,
              PHP, Java (with a focus on Spring Boot), HTML, CSS, and back-end
              technologies such as MySQL and Node.js. I am also highly
              proficient in modern UI frameworks like Tailwind CSS and
              Bootstrap, allowing me to design and develop responsive, visually
              appealing, and user-friendly web applications.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              Programming is more than just a career for me—it's a passion. I
              enjoy solving complex problems, optimizing performance, and
              constantly exploring new tools and frameworks to stay at the
              forefront of the ever-evolving tech industry.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" animateOnce key={index}>
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
