import styled from "@emotion/styled";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigatorLinks = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li:hover {
    border-bottom: 1px solid black;
    transition: all 0.5s ease-in-out;
  }
`;
