import styled from "styled-components";
import { useContext,} from "react";
import { LogedUserContext } from "../context/LogedUserContext";
import { checkHabit } from "../api/api";
import checkBtn from '../assets/images/check.svg';

function TodayHabits( {updatePage, setUpdatePage} ) {
  const { logedUser } = useContext(LogedUserContext);

  if(!logedUser.habits) {
    return <div>Carregando</div>
  }

  return (
    <HabitList>
      {
        logedUser.habits.map(habit => (
          <Habit key={habit.id} done={habit.done} current={habit.currentSequence} highest={habit.highestSequence} data-test='today-habit-container'>
            <h1 data-test='today-habit-name'>{habit.name}</h1>
            <p data-test='today-habit-sequence'>Sequência atual: <span className="current">{habit.currentSequence} dias</span></p>
            <p data-test='today-habit-record'>Seu recorde: <span className="highest">{habit.highestSequence} dias</span></p>
            <Button 
              checked={habit.done} 
              onClick={() => {
                checkHabit(habit, logedUser.token);
                setTimeout(() => setUpdatePage(updatePage + 1), 300)
              }} 
              data-test='today-habit-check-btn'
            >
              <img src={checkBtn} alt="Check Button" />
            </Button>
          </Habit>
        ))
      }
    </HabitList>
  );
}

export default TodayHabits;

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
    color: ${ props => props.done && '#8FC549' };
  }

  .highest {
    color: ${
      props => props.done && props.current === props.highest  && props.current > 0 && '#8FC549'
    };
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