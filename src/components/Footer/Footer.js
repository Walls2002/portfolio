import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.footer`
  border-top: 1px solid var(--line);
  background: var(--paper);
  padding: 4rem 0 2.5rem;
  margin-top: 5rem;
`;

const Wordmark = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 11vw, 7rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--ink);
  margin-bottom: 2.5rem;
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--line);

  font-family: "Space Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);

  a:hover {
    color: var(--accent);
  }

  .links {
    display: flex;
    gap: 1.5rem;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <Wordmark>Let&rsquo;s build.</Wordmark>
        <MetaRow>
          <span>© 2026 Wally Gaynor — Quezon City, PH</span>
          <div className="links">
            <a
              href="https://github.com/Walls2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/wallie-gaynor-26b0a7223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:walliegaynor29@gmail.com">Email</a>
          </div>
        </MetaRow>
      </div>
    </FooterSection>
  );
}

export default Footer;
