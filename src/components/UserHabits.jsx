import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { LogedUserContext } from "../context/LogedUserContext";
import { BASE_URL, createConfig, deleteHabit } from "../api/api";
import { WEEKDAYS } from "../constants";
import { Day } from "../styledComponents/NewHabitStyle";
import delBtn from '../assets/images/delete.svg';

function UserHabits( {reload, setReload, createHab} ) {
  const [userHabits, setUserHabits] = useState( undefined );

  const { logedUser } = useContext(LogedUserContext);

  useEffect(() => {
    const config = createConfig(logedUser.token)

    axios.get(`${BASE_URL}habits`, config)
    .then(resp => {
      console.log(resp);
      setUserHabits(resp.data);
    })
    .catch(error => console.log(error));
  }, [reload]);

  if(!userHabits || userHabits.length === 0) {
    return <P createHab={createHab}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</P>;
  }

  return (
    <Container createHab={createHab}>
      {userHabits.map((habbit) => (
        <Habit key={habbit.id} data-test='habit-container'>
          <p data-test='habit-name'>{habbit.name}</p>
          <img 
            src={delBtn} 
            alt="Delete" 
            onClick={() => {deleteHabit(habbit.id, logedUser.token); setTimeout(() => setReload(reload + 1), 500) }} 
            data-test='habit-delete-btn'
          />
          <div>
            {WEEKDAYS.map((day, i) => (<Day key={i} selected={habbit.days.includes(i)} data-test='habit-day'>{day}</Day>))}
          </div>
        </Habit>
        )
      )}
    </Container>
  );
};

export default UserHabits;

const Container = styled.ul`
  margin-top: ${props => props.createHab ? '360px' : '156px'};
  margin-bottom: 96px;
  min-height: calc(100vh - 250px);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #e7e5e5;
`;

const P = styled.p`
  margin: 0px 18px;
  margin-top: 156px;
  font-size: 18px;
  color: #666666;
`;

const Habit = styled.li`
  position: relative;
  width: 95%;
  margin: 0px auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;

  p {
    font-size: 20px;
    margin-bottom: 10px;
    color: #666666;
  }

  img {
    position: absolute;
    right: 10px;
    top: 5px;
    width: 13px;
    height: 15px;
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 4px;
  }
`;
