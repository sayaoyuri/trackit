import styled from "styled-components";

export const CreateHabitsHeader = styled.header`
  position: fixed;
  z-index: 3;
  top: 75px;
  left: 0;
  width: 100%;
  background-color: #e7e5e5;
  padding: 23px 5px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #52B6FF;
    cursor: pointer;
  }
`;

export const Day = styled.button`
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

  &:disabled {
    cursor: progress;
  }
`;

export const CreateHabitContainer = styled.form`
  position: fixed;
  z-index: 5;
  top: 156px;
  width: 100%;
  padding: 20px 36px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;

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

    button {
      width: 84px;
      height: 35px;
      border-radius: 5px;
      border: none;
      cursor: pointer;

      display: flex; 
      justify-content: center;
      align-items: center;

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