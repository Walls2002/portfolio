import styled from "@emotion/styled";

export const AchievementsWrapper = styled.div`
  margin-top: 5rem;
  background: var(--paper-2);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 4rem 0;
`;

export const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const AchievementCard = styled.div`
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 2rem;
  transition: border-color 0.3s ease;

  display: flex;
  align-items: flex-start;
  gap: 1.75rem;

  &:hover {
    border-color: var(--line-strong);
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.25rem;
  }
`;

export const AchievementIcon = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 1rem;
  font-weight: 700;
  min-width: 56px;
  height: 56px;
  border-radius: 2px;
  border: 1px solid var(--line-strong);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    min-width: 46px;
    height: 46px;
    font-size: 0.85rem;
  }
`;

export const AchievementContent = styled.div`
  flex: 1;
`;

export const AchievementTitle = styled.h3`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const AchievementDate = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 1rem;
`;

export const AchievementDescription = styled.p`
  font-size: 1rem;
  color: var(--ink-soft);
  line-height: 1.7;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 2rem;
  text-align: left;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--accent);
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const StatNumber = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-bottom: 0.5rem;
  line-height: 1;

  @media screen and (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const StatLabel = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 0.72rem;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.12em;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
