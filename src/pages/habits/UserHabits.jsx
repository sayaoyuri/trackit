import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Day } from "./CreateHabitStyle";

import { BASE_URL, WEEKDAYS } from "../../constants";

import { LogedUserContext } from "../../context/LogedUserContext";
import delBtn from '../../assets/images/delete.svg';
import axios from "axios";

function UserHabits( {reload, setReload, createHab} ) {
  const [userHabits, setUserHabits] = useState( undefined );

  const { logedUser } = useContext(LogedUserContext);

  function deleteHabit(id) {
    const del = confirm('Deseja deletar este habito?');

    if(del) {
      const config = {
        headers: { Authorization: `Bearer ${logedUser.token}` }
      }

      axios.delete(`${BASE_URL}habits/${id}`, config)
      .then(resp => console.log(resp))
      .catch(error => console.log(error));
      
      setTimeout(() => setReload(reload + 1), 500);
    }
  }

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${logedUser.token}` }
    }

    axios.get(`${BASE_URL}habits`, config)
    .then(resp => {
      console.log(resp);
      setUserHabits(resp.data);
    })
    .catch(error => console.log(error));
  }, [reload]);

  if(!userHabits || userHabits.length === 0) {
    return <P>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</P>;
  }

  return (
    <Container createHab={createHab}>
      {userHabits.map((habbit) => (
        <Habit key={habbit.id} data-test='habit-container'>
          <p data-test='habit-name'>{habbit.name}</p>
          <img src={delBtn} alt="Delete" onClick={() => deleteHabit(habbit.id)} data-test='habit-delete-btn'/>
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
  justify-content: center;
  gap: 15px;
  background-color: #e7e5e5;
`;

const P = styled.p`
  margin: 44px 18px 0px 18px;
  font-family: 'Lexend Deca';
  font-size: 18px;
  color: #666666;
`;

const Habit = styled.li`
  position: relative;
  width: 95%;
  margin: 0px 10px;
  font-family: 'Lexend Deca';
  background-color: #fff;
  /* background-color: black; */
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
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 4px;
  }
`;
