import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/globalStyle";
import profile from "./profile.png";
import { StyledInput } from "../../common/styled";

const Navbar = () => {
  return (
    <NavbarGeneralContainer>
      <NavbarWrapper>
        <NavbarLeftContainer>
          <LogoWrapper>Exalumnos CS</LogoWrapper>
          <StyledInput
            type="text"
            placeholder="Busca por nombre, tecnologia, etc..."
          />
        </NavbarLeftContainer>
        <NavbarRightContainer>
          <MenuWrapper>
            <MenuItem>Inicio</MenuItem>
            <MenuItem>Mi red</MenuItem>
            <MenuItem>Bolsa de trabajo</MenuItem>
            <MenuItem>Noticias</MenuItem>
          </MenuWrapper>
          <ProfileImage />
        </NavbarRightContainer>
      </NavbarWrapper>
      <Outlet />
    </NavbarGeneralContainer>
  );
};

export default Navbar;

const NavbarGeneralContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const NavbarWrapper = styled.div`
  width: 100%;
  height: 96px;
  padding: 16px 40px;
  background-color: ${theme.palette.black.zero};
  color: ${theme.palette.text.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
`;

const NavbarRightContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`;

const LogoWrapper = styled.div`
  width: 300px;
  text-align: center;
`;

const MenuWrapper = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const MenuItem = styled.li`
  height: 100%;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover,
  &:focus {
    cursor: pointer;
    background-image: radial-gradient(
      ${theme.palette.primaryBlue.minus1} 0%,
      transparent 70%
    );
  }
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  content: "";
  background-image: url(${profile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
