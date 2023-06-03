import styled from "styled-components";
import NavBar from "../components/NavBar";
import BottomNav from "./habits/BottomNav";
import { Header } from "./habits/today/Habits";

function History() {
  return (
    <>
      <NavBar/>
      <P>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </P>
      <BottomNav />
    </>
  );
}

export default History;

const P = styled(Header)`
  p {
    color: #666666;
  }
`;