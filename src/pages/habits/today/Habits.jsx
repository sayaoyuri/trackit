import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import 'react-circular-progressbar/dist/styles.css';

import BottomNav from "../BottomNav";

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

    setTimeout(() => setReload(reload + 1), 500)
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
        aux.dayProgressText = done === 0 ? 'Nenhum habito concluido hoje' : `${( done / aux.habits.length * 100 ).toFixed(0)}% dos hábitos concluídos`;

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
      <Header>
        <h1>
          {`${FULLWEEKDAYS.at( dayjs().get('day') )}, ${dayjs().format('DD')}/${dayjs().format('MM') }`}
        </h1>
        <p>{logedUser.dayProgressText}</p>
      </Header>
      {
        logedUser.habits.map(habit => (
          <Container key={habit.id} done={habit.done} current={habit.currentSequence} highest={habit.highestSequence}>
            <h1>{habit.name}</h1>
            <p>Sequência atual: <span className="current">{habit.currentSequence} dias</span></p>
            <p>Seu recorde: <span className="highest">{habit.highestSequence} dias</span></p>
            <Button checked={habit.done} onClick={() => checkHabit(habit)}>
              <img src={checkBtn} alt="Check Button" />
            </Button>
          </Container>
        ))
      }
      <BottomNav />
    </>
  );
}

export default Habits;

export const Header = styled.header`
  margin-top: 98px;
  padding: 5px;
  font-family: 'Lexend Deca';
  margin-bottom: 28px;

  h1 {
    color: #126BA5;
    font-size: 23px;
    margin-bottom: 5px;
  }

  p {
    color: #8FC549;
    font-size: 18px;
  }
`;

const Container = styled.div`
  position: relative;
  padding: 13px;
  font-family: 'Lexend Deca';
  color: #333;

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
  z-index: 2;
  top: 10px;
  right: 13px;
  width: 69px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.checked ? '#8FC549' : '#d6d3d3'};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 37px;
  }
`;