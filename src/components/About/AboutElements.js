import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 140px;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`;

export const TechName = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 12px;
  letter-spacing: 0.03em;
  color: var(--ink-soft);
`;
