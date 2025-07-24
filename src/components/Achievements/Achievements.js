import React from "react";
import {
  AchievementsWrapper,
  AchievementsContainer,
  AchievementCard,
  AchievementIcon,
  AchievementContent,
  AchievementTitle,
  AchievementDescription,
  AchievementDate,
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
} from "./AchievementsElements";
import ScrollAnimation from "react-animate-on-scroll";

function Achievements() {
  const achievementsData = [
    {
      title: "Bachelor of Science in Information Technology, Cum Laude",
      description:
        "Graduated Cum Laude from Quezon City University – Main Campus with strong academic performance and comprehensive knowledge in software development, database management, and systems analysis.",
      date: "2024",
      icon: "🎓",
    },
    {
      title: "Full Stack Developer at Apollo Software Corp.",
      description:
        "Successfully developed and maintained comprehensive 7-Eleven POS enhancements, improving operational efficiency and customer satisfaction.",
      date: "2024 - Present",
      icon: "💼",
    },
  ];

  const statsData = [
    {
      number: "15+",
      label: "Projects Completed",
    },
    {
      number: "3+",
      label: "Years Experience",
    },
    {
      number: "10+",
      label: "Technologies Mastered",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <AchievementsWrapper id="achievements">
      <div className="Container">
        <div className="SectionTitle">Achievements & Milestones</div>

        {/* Stats Section */}
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <StatsContainer>
            {statsData.map((stat, index) => (
              <StatCard key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsContainer>
        </ScrollAnimation>

        {/* Achievements Section */}
        <AchievementsContainer>
          {achievementsData.map((achievement, index) => (
            <ScrollAnimation
              key={index}
              animateIn="fadeInLeft"
              delay={index * 100}
              animateOnce
            >
              <AchievementCard>
                <AchievementIcon>{achievement.icon}</AchievementIcon>
                <AchievementContent>
                  <AchievementTitle>{achievement.title}</AchievementTitle>
                  <AchievementDate>{achievement.date}</AchievementDate>
                  <AchievementDescription>
                    {achievement.description}
                  </AchievementDescription>
                </AchievementContent>
              </AchievementCard>
            </ScrollAnimation>
          ))}
        </AchievementsContainer>
      </div>
    </AchievementsWrapper>
  );
}

export default Achievements;
