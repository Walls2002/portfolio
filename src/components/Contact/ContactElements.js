import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1rem;

  span {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: var(--ink);
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.75rem;
    }
  }
`;
