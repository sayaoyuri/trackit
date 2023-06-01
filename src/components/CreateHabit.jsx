import styled from "styled-components";
import { WEEKDAYS } from "../constants";
import { useState } from "react";

function CreateHabit() {
  const [createHab, setCreateHat] = useState(false);
  const [name, setName] = useState();
  const [days, setDays] = useState( [] );
  console.log(days);

  function addDay(ev) {
    ev.preventDefault();

    if(!days.includes(ev.target.value)) {
      const daysAux = [...days, ev.target.value];
      setDays(daysAux);
    } else {
      days.splice(days.indexOf(ev.target.value), 1);
      setDays( [...days] );
    }
  }

  return (
    <>
      <HabitsHeader>
        <p>Meus hábitos</p>
        <button onClick={() => !createHab ? setCreateHat(true) : setCreateHat(false)}>+</button>
      </HabitsHeader>

      {createHab && 
        <HabitContainer>
          <input
            type="text"
            placeholder='nome do habito'
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
            />
          <ul>
            {WEEKDAYS.map((day, i) => <Li key={i} value={i + 1} onClick={(ev) => addDay(ev)} selected={days.includes(i + 1)}>{day}</Li>)}
          </ul>
          <div>
            <button>Cancelar</button>
            <button>Salvar</button>
          </div>
        </HabitContainer>
      }
    </>
  );
}

export default CreateHabit;

const HabitsHeader = styled.header`
  margin: 108px 5px 28px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Lexend Deca';
  color: #126BA5;

  button {
    width: 40px;
    height: 35px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 26px;
    background-color: #52B6FF;
  }
`;

const Li = styled.li`
  background-color: ${props => props.selected ? '#cfcfcf' : '#ffffff'};
  font-family: 'Lexend Deca';
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: #DBDBDB;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  cursor: pointer;
`;

const HabitContainer = styled.form`
  margin: 0px 36px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    width: 100%;
    border: 1px solid #D5D5D5;
    height: 45px;
    padding-left: 5px;
    font-size: 19px;
    color: #666666;

    &::placeholder {
      color: #DBDBDB;
    }
  }

  ul {
    display: flex;
    gap: 4px;
  }

  div {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    margin-top: 29px;

    button {
      width: 84px;
      height: 35px;
      border-radius: 5px;
      border: none;
      cursor: pointer;

      &:disabled {
        cursor: progress;
      }
    }

    & :nth-child(1) {
      background-color: transparent;
      color: #52B6FF;
    }

    & :nth-child(2) {
      background-color: #52B6FF;
      color: #fff;
    }
  }
`;