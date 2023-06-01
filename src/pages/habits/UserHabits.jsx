import { useState } from "react";
import styled from "styled-components";
import { Day } from "./CreateHabitStyle";
import { WEEKDAYS } from "../../constants";

import del from '../../assets/images/delete.svg';

function UserHabits() {
  const [userHabits, setUserHabits] = useState( undefined )

  if(!userHabits) {
    return <P>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</P>;
  }

  return (
    <>
      <Habit>
        <p>Habito</p>
        <img src={del} alt="Delete" />
        <div>
          {WEEKDAYS.map((day, i) => (
            <Day key={i} selected={true}>{day}</Day>
            )
            )}
        </div>
      </Habit>
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
`
