import CreateHabit from "../../components/CreateHabit";
import NavBar from "../../components/NavBar";
import UserHabits from "./UserHabits";

function Habits() {
  return (
    <>
      <NavBar />
      <CreateHabit />
      <UserHabits />
    </>
  );
}

export default Habits;