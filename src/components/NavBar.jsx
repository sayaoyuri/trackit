import styled from "styled-components";
import { useContext } from "react";
import { LogedUserContext } from "../context/LogedUserContext";

function NavBar() {
  const { logedUser } = useContext(LogedUserContext);

  return (
    <Nav>
      <p>Trackit</p>
      <img src={logedUser.image} alt="User photo" />
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  padding: 10px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126BA5;

  p {
    font-family: 'Playball';
    font-size: 39px;
    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;