import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  padding: 3rem 0;
  grid-template-columns: 1fr;
  border-top: 1px solid var(--line);
  align-items: center;

  @media (min-width: 992px) {
    grid-template-columns: 1.1fr 1fr;
  }
`;

export const CardIndex = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.75rem;
`;

export const CardLeft = styled.div`
  justify-self: stretch;
  height: 100%;
  order: 2;

  @media (min-width: 992px) {
    order: 0;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border: 1px solid var(--line);
    border-radius: 4px;
    filter: grayscale(0.15);
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  img:hover {
    filter: grayscale(0);
    transform: translateY(-3px);
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h4 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.85rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--ink);
    line-height: 1.1;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 0.9rem;
    margin-bottom: 1.5rem;
    color: var(--ink-soft);
    line-height: 1.7;
    text-align: left;
  }
`;

export const BtnGroup = styled.div`
  margin-top: 1.75rem;
  display: flex;
  align-items: center;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
`;

export const TechCard = styled.div`
  border: 1px solid var(--line);
  border-radius: 2px;
  background-color: transparent;
  padding: 5px 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-family: "Space Mono", monospace;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--ink-soft);
  cursor: default;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--ink);
  }

  &:hover img {
    filter: none;
  }
`;

export const TechLogo = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
  /* black & white version of the stack logo */
  filter: grayscale(1) contrast(1.1) brightness(0.55);
  transition: filter 0.2s ease;
`;

export const ImageModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26, 24, 19, 0.85);
  z-index: 1000;
`;

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`;

export const ModalClose = styled.button`
  position: fixed;
  top: 20px;
  right: 24px;
  background: transparent;
  border: none;
  color: var(--paper);
  font-size: 2.25rem;
  cursor: pointer;
  z-index: 1001;
  line-height: 1;
`;
