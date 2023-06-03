import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import 'react-circular-progressbar/dist/styles.css';

import BottomNav from "../BottomNav";

import checkBtn from '../../../assets/images/check.svg';

import dayjs from "dayjs";
import { LogedUserContext } from "../../../context/LogedUserContext";
import { BASE_URL, FULLWEEKDAYS } from "../../../constants";

function Habits() {
  const { logedUser, setLogedUser } = useContext(LogedUserContext);

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

        setLogedUser(aux);
      })
      .catch(error => console.log(error));
    }
  }, [])

  if(!logedUser.habits) {
    return <div>Carregando</div>
  }

  return(
    <>
      <Header>
        <h1>
          {`${FULLWEEKDAYS.at( dayjs().get('day') )}, ${dayjs().format('DD')}/${dayjs().format('MM') }`}
        </h1>
        <p>67% dos habitos concluidos</p>
      </Header>
      {
        logedUser.habits.map(habit => (
          <Container key={habit.id}>
            <h1>{habit.name}</h1>
            <p>{`Sequência atual: ${habit.currentSequence}`}</p>
            <p>{`Seu recorde: ${habit.highestSequence}`}</p>
            <Button checked={habit.done}>
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

const Header = styled.header`
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