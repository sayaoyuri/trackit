import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { LogedUserContext } from "../../context/LogedUserContext";

function BottomNav() {
  const { logedUser } = useContext(LogedUserContext);

  return (
    <Nav>
        <Link to='/habitos'>
          <p>Habitos</p>
        </Link>

        <Link to='/hoje'>
          <ProgressBar>
            <CircularProgressbar 
              value={logedUser.dayProgressStat * 100}
              maxValue={logedUser.habits.length * 100}
              text={'Hoje'}
              background 
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}/>
          </ProgressBar>
        </Link>

        <Link to='/historico'>
          <p>Historico</p>
        </Link>
      </Nav>
  );
}

export default BottomNav;

const Nav = styled.nav`
  font-family: 'Lexend Deca';
  font-size: 18px;
  color: #52B6FF;
  width: 100%;
  padding-bottom: 3px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

const ProgressBar = styled.div`
  width: 91px;
`;