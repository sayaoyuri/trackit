import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import 'react-circular-progressbar/dist/styles.css';

import BottomNav from "../../../components/BottomNav.jsx";

import checkBtn from '../../../assets/images/check.svg';

import dayjs from "dayjs";
import { LogedUserContext } from "../../../context/LogedUserContext";
import { BASE_URL, FULLWEEKDAYS } from "../../../constants";

function Habits() {
  const { logedUser, setLogedUser } = useContext(LogedUserContext);
  const [reload, setReload] = useState(0);

  function checkHabit(habit) {
    const config = {
      headers: { Authorization: `Bearer ${logedUser.token}` }
    }

    const action = habit.done ? 'uncheck' : 'check'

    axios.post(`${BASE_URL}habits/${habit.id}/${action}`, '', config)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));

    setTimeout(() => setReload(reload + 1), 400)
  }

  useEffect(() => {
    if(logedUser.token) {
      const config = {
        headers: { Authorization: `Bearer ${logedUser.token}` }
      }

      axios.get(`${BASE_URL}habits/today`, config)
      .then(resp => {
        console.log(resp)
        const aux = {...logedUser};
        aux.habits = resp.data;

        const done = aux.habits.map(habit => habit.done).filter(hab => hab === true).length;

        aux.dayProgressStat = done;
        aux.dayProgressText = done === 0 ? 'Nenhum hábito concluído ainda' : `${( done / aux.habits.length * 100 ).toFixed(0)}% dos hábitos concluídos`;

        setLogedUser(aux);
      })
      .catch(error => console.log(error));
    }
  }, [reload])

  if(!logedUser.habits) {
    return <div>Carregando</div>
  }

  return(
    <>
      <Header hasDone={logedUser.dayProgressStat > 0}>
          <h1 data-test='today'>
            {`${FULLWEEKDAYS.at( dayjs().get('day') )}, ${dayjs().format('DD')}/${dayjs().format('MM') }`}
          </h1>
          <p data-test='today-counter'>{logedUser.dayProgressText}</p>
        </Header>
      <Container>
      <HabitList>
        {
          logedUser.habits.map(habit => (
            <Habit key={habit.id} done={habit.done} current={habit.currentSequence} highest={habit.highestSequence} data-test='today-habit-container'>
              <h1 data-test='today-habit-name'>{habit.name}</h1>
              <p data-test='today-habit-sequence'>Sequência atual: <span className="current">{habit.currentSequence} dias</span></p>
              <p data-test='today-habit-record'>Seu recorde: <span className="highest">{habit.highestSequence} dias</span></p>
              <Button checked={habit.done} onClick={() => checkHabit(habit)} data-test='today-habit-check-btn'>
                <img src={checkBtn} alt="Check Button" />
              </Button>
            </Habit>
          ))
        }
      </HabitList>
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


const HabitList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Habit = styled.li`
  position: relative;
  width: 95%;
  height: 70px;
  padding: 8px 13px;
  align-self: center;
  font-family: 'Lexend Deca';
  color: #333;
  background-color: #fff;
  border-radius: 5px;

  h1, p {
    color: #666666;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
  }

  .current {
    color: ${props => props.done && '#8FC549'}
  }

  .highest {
    color: ${props => props.highest === props.current && props.current > 0 && '#8FC549'}
  }
`;

const Button = styled.button`
  position: absolute;
  z-index: 1;
  top: 5px;
  right: 13px;
  width: 69px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.checked ? '#8FC549' : '#dddada'};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 37px;
  }
`;