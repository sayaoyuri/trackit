import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { BASE_URL, WEEKDAYS } from "../constants";

import { LogedUserContext } from "../context/LogedUserContext";

import { Day, CreateHabitsHeader, CreateHabitContainer } from "../pages/habits/CreateHabitStyle";

import plus from '../assets/images/plus.svg';

function CreateHabit( {reload, setReload, createHab, setCreateHab} ) {
  const [fieldStatus, setFieldStatus] = useState(false);
  const [createBtnSt, setCreateBtnSt] = useState(false);
  const [name, setName] = useState('');
  const [days, setDays] = useState( [] );
  console.log(days);

  const {logedUser} = useContext(LogedUserContext);

  function resetForm() {
    setCreateHab(false);
    setFieldStatus(false);
    setDays([]); 
    setName('');
  }

  function createHabit(ev) {
    ev.preventDefault();
    setFieldStatus(true);
    setCreateBtnSt(true);

    const config = {
      headers: { Authorization: `Bearer ${logedUser.token}`}
    }

    const body = { name, days };

    axios.post(`${BASE_URL}habits`, body, config)
      .then(resp => {
        console.log(resp); 
        resetForm();
        setReload(reload + 1);
        setCreateBtnSt(false);
      })
      .catch(error => {
        console.log(error);
        alert(error.response.data.message);
        setFieldStatus(false);
        setCreateBtnSt(false);
      });
  }

  function addDay(ev) {
    ev.preventDefault();
    const day = parseInt(ev.target.value);

    if(!days.includes(day)) {
      const daysAux = [...days, day];
      setDays(daysAux);
    } else {
      days.splice(days.indexOf(day), 1);
      setDays( [...days] );
    }
  }

  return (
    <>
      <CreateHabitsHeader>
        <p>Meus hábitos</p>
        <button 
          onClick={() => !createHab ? setCreateHab(true) : setCreateHab(false)} 
          disabled={createBtnSt} 
          data-test='habit-create-btn'
        >
          <img src={plus} alt="+" />
        </button>
      </CreateHabitsHeader>
      {createHab && 
        <CreateHabitContainer onSubmit={createHabit} data-test='habit-create-container'>
          <input
            type="text"
            placeholder='nome do habito'
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
            disabled={fieldStatus}
            data-test='habit-name-input'
            />
          <ul>
            {WEEKDAYS.map((day, i) => (
              <Day 
                key={i} 
                value={i} 
                onClick={(ev) => addDay(ev)} selected={days.includes(i)} 
                disabled={fieldStatus} 
                data-test='habit-day'>
                {day}
              </Day>)
            )}
          </ul>
          <div>
            <button type="button" disabled={fieldStatus} onClick={() => {setFieldStatus(false); setCreateHab(false)}} data-test='habit-create-cancel-btn'>
              {!fieldStatus ? 'Cancelar' : <ThreeDots width="35" height="35" color="#52B6FF" />}
            </button>
            <button type="submit" disabled={fieldStatus} data-test='habit-create-save-btn'>
            {!fieldStatus ? 'Salvar' : <ThreeDots width="35" height="35" color="#fff" />}
            </button>
          </div>
        </CreateHabitContainer>
      }
    </>
  );
}

export default CreateHabit;