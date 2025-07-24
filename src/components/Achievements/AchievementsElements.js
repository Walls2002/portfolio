import styled from "@emotion/styled";

export const AchievementsWrapper = styled.div`
  margin-top: 5rem;
  background: #fafaff;
  padding: 3rem 0;
`;

export const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const AchievementCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

export const AchievementIcon = styled.div`
  font-size: 3rem;
  min-width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgb(57, 134, 250), rgb(87, 164, 255));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 15px rgba(57, 134, 250, 0.3);

  @media screen and (max-width: 768px) {
    min-width: 60px;
    height: 60px;
    font-size: 2rem;
    margin: 0 auto;
  }
`;

export const AchievementContent = styled.div`
  flex: 1;
`;

export const AchievementTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #151418;
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const AchievementDate = styled.div`
  font-size: 0.9rem;
  color: rgb(57, 134, 250);
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const AchievementDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
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
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(1, 86, 212, 1);
  margin-bottom: 0.5rem;
  line-height: 1;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
