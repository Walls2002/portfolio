import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: transparent;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  position: relative;
  color: var(--ink-soft);
  display: flex;
  font-family: "Space Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  align-items: center;
  height: 100%;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: 28px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width 0.25s ease;
  }

  &:hover {
    color: var(--ink);
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Logo = styled("div")`
  display: inline-flex;
  align-items: center;

  img {
    width: 90px;
    height: auto;
    display: block;
    /* logo file is solid white; recolor to ink so it reads on the light header */
    filter: brightness(0);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--ink);
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1.75rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
