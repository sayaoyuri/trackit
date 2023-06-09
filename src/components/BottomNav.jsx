import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { LogedUserContext } from "../context/LogedUserContext";

function BottomNav() {
  const { logedUser } = useContext(LogedUserContext);
  const navigate = useNavigate();


  return (
    <Nav data-test='menu'>
      <p onClick={() => navigate('/habitos')}>Habitos</p>

      <ProgressBar onClick={() => navigate('/hoje')}>
        <CircularProgressbar 
          value={logedUser.dayProgressStat > 0 ? logedUser.dayProgressStat * 100 : 0}
          maxValue={logedUser.habits.length > 0 ? logedUser.habits.length * 100 : 1}
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
      
      <p onClick={() => navigate('/historico')}>Historico</p>
    </Nav>
  );
}

export default BottomNav;

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 96px;
  padding-top: 2px;
  padding-bottom: 3px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  font-family: 'Lexend Deca';
  text-decoration: none;
  font-size: 18px;
  color: #52B6FF;
  background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 1)40%, rgba(255, 255, 255, 1) 100%);
`;

const ProgressBar = styled.div`
  width: 91px;
`;