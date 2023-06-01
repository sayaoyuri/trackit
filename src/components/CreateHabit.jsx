import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { BASE_URL, WEEKDAYS } from "../constants";

import { LogedUserContext } from "../context/LogedUserContext";

import { Day, CreateHabitsHeader, CreateHabitContainer } from "../pages/habits/CreateHabitStyle";

function CreateHabit( {reload, setReload} ) {
  const [createHab, setCreateHab] = useState(false);
  const [fieldStatus, setFieldStatus] = useState (false);
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

    const config = {
      headers: { Authorization: `Bearer ${logedUser.token}`}
    }

    const body = { name, days };

    axios.post(`${BASE_URL}habits`, body, config)
      .then(resp => {
        console.log(resp); 
        resetForm();
        setReload(reload + 1);
      })
      .catch(error => {
        console.log(error);
        alert(error.response.data.message);
        setFieldStatus(false);
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
        <button onClick={() => !createHab ? setCreateHab(true) : setCreateHab(false)}>+</button>
      </CreateHabitsHeader>
      {createHab && 
        <CreateHabitContainer onSubmit={createHabit}>
          <input
            type="text"
            placeholder='nome do habito'
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
            disabled={fieldStatus}
            />
          <ul>
            {WEEKDAYS.map((day, i) => (
              <Day 
                key={i} 
                value={i + 1} 
                onClick={(ev) => addDay(ev)} selected={days.includes(i + 1)} 
                disabled={fieldStatus}>
                {day}
              </Day>)
            )}
          </ul>
          <div>
            <button type="button" disabled={fieldStatus} onClick={resetForm}>
              {!fieldStatus ? 'Cancelar' : <ThreeDots width="35" height="35" color="#52B6FF" />}
            </button>
            <button type="submit" disabled={fieldStatus}>
            {!fieldStatus ? 'Salvar' : <ThreeDots width="35" height="35" color="#fff" />}
            </button>
          </div>
        </CreateHabitContainer>
      }
    </>
  );
}

export default CreateHabit;