import { useState } from "react";
import CreateHabit from "../../components/CreateHabit";
import NavBar from "../../components/NavBar";
import UserHabits from "./UserHabits";
import BottomNav from "../.././components/BottomNav";

function Habits() {
  const [reload, setReload] = useState(0);

  return (
    <>
      <NavBar />
      <CreateHabit reload={reload} setReload={setReload}/>
      <UserHabits reload={reload} setReload={setReload}/>
      <BottomNav />
    </>
  );
}

export default Habits;