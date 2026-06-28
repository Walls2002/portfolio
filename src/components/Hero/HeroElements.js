import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 4rem;
  padding-top: 3rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1080px;
  }
`;

export const Available = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "Space Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-soft);
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid var(--line);

  span.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 4px rgba(223, 79, 26, 0.15);
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2.5rem;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1.6;

  h1 {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2.8rem, 8vw, 5.5rem);
    line-height: 0.98;
    letter-spacing: -0.04em;
    color: var(--ink);
    font-weight: 700;
  }

  h5 {
    font-family: "Space Mono", monospace;
    font-size: clamp(1rem, 2.4vw, 1.4rem);
    color: var(--accent);
    margin-top: 1.25rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--ink-soft);
    max-width: 44ch;
  }

  @media screen and (max-width: 992px) {
    h5 {
      min-height: 4rem;
    }
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Editorial spec strip — full width under the hero */
export const Spec = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin-top: 3.5rem;
  border-top: 1px solid var(--line-strong);
  border-bottom: 1px solid var(--line);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SpecRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1.1rem 1.25rem;
  border-left: 1px solid var(--line);

  &:first-of-type {
    border-left: none;
  }

  @media screen and (max-width: 768px) {
    &:nth-of-type(odd) {
      border-left: none;
    }
    &:nth-of-type(n + 3) {
      border-top: 1px solid var(--line);
    }
  }

  dt {
    font-family: "Space Mono", monospace;
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  dd {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--ink);
    margin: 0;
  }
`;

export const Image = styled.img`
  height: 300px;
  width: auto;

  @media screen and (max-width: 992px) {
    height: 240px;
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-12px);
  }
  60% {
    transform: translateY(-6px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  margin-top: 4rem;

  animation: ${ScrollAnimation} 2.4s ease-in-out 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "Space Mono", monospace;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink);

  &::before {
    content: "↓";
    font-size: 1rem;
    color: var(--accent);
  }

  img {
    display: none;
  }
`;
