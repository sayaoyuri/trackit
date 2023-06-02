import styled from "styled-components";

import checkBtn from '../../../assets/images/check.svg';

function Habits() {
  return(
    <>
      <Header>
        <h1>Segunda, 17/05</h1>
        <p>67% dos habitos concluidos</p>
      </Header>
      <Container>
        <h1>Habito Titulo</h1>
        <p>Sequência atual: 3 dias</p>
        <p>Seu recorde: 5 dias</p>
        <Button checked={false}>
          <img src={checkBtn} alt="Check Button" />
        </Button>
      </Container>
      <Container>
        <h1>Habito Titulo</h1>
        <p>Sequência atual: 3 dias</p>
        <p>Seu recorde: 5 dias</p>
        <Button checked={true}>
          <img src={checkBtn} alt="Check Button" />
        </Button>
      </Container>
      <Container>
        <h1>Habito Titulo</h1>
        <p>Sequência atual: 3 dias</p>
        <p>Seu recorde: 5 dias</p>
        <Button checked={true}>
          <img src={checkBtn} alt="Check Button" />
        </Button>
      </Container>
    </>
  );
}

export default Habits;

const Header = styled.header`
  font-family: 'Lexend Deca';
  margin-bottom: 28px;

  h1 {
    color: #126BA5;
    font-size: 23px;
    margin-bottom: 5px;
  }

  p {
    color: #8FC549;
    font-size: 18px;
  }
`;

const Container = styled.div`
  position: relative;
  padding: 13px;
  font-family: 'Lexend Deca';
  color: #333;

  h1 {
    font-size: 20px;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 13px;
  width: 69px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.checked ? '#8FC549' : '#d6d3d3'};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 37px;
  }
`;
