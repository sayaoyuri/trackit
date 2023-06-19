import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import 'react-circular-progressbar/dist/styles.css';
import { LogedUserContext } from "../../../context/LogedUserContext";
import { BASE_URL, createConfig } from "../../../api/api";
import Day from './Date.jsx'
import TodayHabits from "../../../components/TodayHabits";
import BottomNav from "../../../components/BottomNav.jsx";

function Habits() {
  const { logedUser, setLogedUser } = useContext(LogedUserContext);
  const [ updatePage, setUpdatePage ] = useState(0);

    useEffect(() => {
    if(logedUser.token) {
      const config = createConfig(logedUser.token);

      axios.get(`${BASE_URL}habits/today`, config)
      .then(resp => {
        console.log(resp)
        const aux = {...logedUser, habits: resp.data};

        const done = aux.habits.map(habit => habit.done).filter(hab => hab === true).length;

        aux.dayProgressStat = done;
        aux.dayProgressText = done === 0 ? 'Nenhum hábito concluído ainda' : `${( done / aux.habits.length * 100 ).toFixed(0)}% dos hábitos concluídos`;

        setLogedUser(aux);
      })
      .catch(error => console.log(error));
    }
  }, [updatePage])

  if(!logedUser.habits) {
    return <div>Carregando</div>
  }

  return(
    <>
      <Header hasDone={logedUser.dayProgressStat > 0}>
        <Day/>
        <p data-test='today-counter'>{logedUser.dayProgressText}</p>
      </Header>
      <Container>
        <TodayHabits updatePage={updatePage} setUpdatePage={setUpdatePage}/>
        <BottomNav />
      </Container>
    </>
  );
}

export default Habits;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 4;
  background-color: #e7e5e5;
  top: 75px;
  left: 0;
  padding: 5px;
  font-family: 'Lexend Deca';
  padding-top: 23px;

  h1 {
    color: #126BA5;
    font-size: 23px;
    margin-bottom: 5px;
  }

  p {
    color: ${props => props.hasDone ? '#8FC549' : '#BABABA'};
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

const Container = styled.main`
  position: relative;
  margin-top: 154px;
  margin-bottom: 94px;
  max-height: calc(100vh - 248px);
  padding: 5px 0px;
  overflow-y: auto;
  background-color: #e7e5e5;
`;