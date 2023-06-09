import { useState } from "react";
import styled from "styled-components";
import CreateHabit from "../../components/CreateHabit";
import NavBar from "../../components/NavBar";
import UserHabits from "./UserHabits";
import BottomNav from "../.././components/BottomNav";

function Habits() {
  const [createHab, setCreateHab] = useState(false);
  const [reload, setReload] = useState(0);

  return (
    <Container>
      <NavBar />
      <CreateHabit reload={reload} setReload={setReload} createHab={createHab} setCreateHab={setCreateHab}/>
      <UserHabits reload={reload} setReload={setReload} createHab={createHab}/>
      <BottomNav />
    </Container>
  );
}

const Container = styled.main`
  min-height: 100vh;
  overflow-y: auto;
`;

export default Habits;