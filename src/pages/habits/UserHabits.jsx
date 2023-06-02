import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Day } from "./CreateHabitStyle";

import { BASE_URL, WEEKDAYS } from "../../constants";

import { LogedUserContext } from "../../context/LogedUserContext";
import delBtn from '../../assets/images/delete.svg';
import axios from "axios";

function UserHabits( {reload, setReload} ) {
  const [userHabits, setUserHabits] = useState( undefined );

  const { logedUser } = useContext(LogedUserContext);

  function deleteHabit(id) {
    const config = {
      headers: { Authorization: `Bearer ${logedUser.token}` }
    }

    axios.delete(`${BASE_URL}habits/${id}`, config)
      .then(resp => console.log(resp))
      .catch(error => console.log(error));
      
      setTimeout(() => setReload(reload + 1), 1000);
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

  if(!userHabits) {
    return <P>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</P>;
  }

  return (
    <>
      {userHabits.map((habbit) => (
        <Habit key={habbit.id}>
          <p>{habbit.name}</p>
          <img src={delBtn} alt="Delete" onClick={() => deleteHabit(habbit.id)}/>
          <div>
            {WEEKDAYS.map((day, i) => (<Day key={i} selected={habbit.days.includes(i + 1)}>{day}</Day>))}
          </div>
        </Habit>
        )
      )}
    </>
  );
};

export default UserHabits;

const P = styled.p`
  margin: 44px 18px 0px 18px;
  font-family: 'Lexend Deca';
  font-size: 18px;
  color: #666666;
`;

const Habit = styled.section`
  position: relative;
  margin: 35px 10px 35px 10px;
  font-family: 'Lexend Deca';

  p {
    font-size: 20px;
    margin-top: 30px;
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
