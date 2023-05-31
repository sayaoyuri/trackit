import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  min-height: 100vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: auto;

  img {
    width: 180px;
    margin: 70px 0px 50px 0px;
  }

  input, button {
    width: 85%;
    height: 45px;
    border-radius: 5px;
  }

  input {
    border: 1px solid #D5D5D5;
    padding-left: 5px;
    &:focus {
      outline: 2px solid #343434;
    }
  }
  
  button {
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 21px;
    border: none;
    cursor: pointer;
    margin-bottom: 25px;

    &:disabled {
      cursor: progress;
    }
  }

  p {
    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }
`;