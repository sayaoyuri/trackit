import styled from "styled-components";

export const CreateHabitsHeader = styled.header`
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

    button {
      width: 84px;
      height: 35px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      margin-top: 29px;
      font-size: 16px;

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