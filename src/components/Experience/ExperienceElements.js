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
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 2.25rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--line-strong);
  }

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
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 0.25rem;
`;

export const JobTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 0.5rem;
`;

export const Location = styled.p`
  font-size: 0.9rem;
  color: var(--ink-soft);
  margin-bottom: 0.5rem;
`;

export const Duration = styled.div`
  background: transparent;
  color: var(--ink-soft);
  border: 1px solid var(--line);
  padding: 0.4rem 0.9rem;
  border-radius: 2px;
  font-family: "Space Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
  align-self: flex-start;
`;

export const Description = styled.div`
  color: var(--ink-soft);
  line-height: 1.7;
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
