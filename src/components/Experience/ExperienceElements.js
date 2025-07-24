import styled from "@emotion/styled";

export const ExperienceWrapper = styled.div`
  margin-top: 5rem;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const ExperienceCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CompanyDetails = styled.div`
  flex: 1;
`;

export const CompanyName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #151418;
  margin-bottom: 0.25rem;
`;

export const JobTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgb(57, 134, 250);
  margin-bottom: 0.5rem;
`;

export const Location = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const Duration = styled.div`
  background: rgba(0, 0, 0, 1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  align-self: flex-start;
`;

export const Description = styled.div`
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 1rem;
  }
`;

export const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

export const Achievement = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #333;
  line-height: 1.6;

  &:before {
    content: "▸";
    position: absolute;
    left: 0;
    color: rgb(57, 134, 250);
    font-weight: bold;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const TechTag = styled.span`
  background: rgba(57, 134, 250, 0.1);
  color: rgb(57, 134, 250);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;
