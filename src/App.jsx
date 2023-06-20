import axios from "axios";
import { LogedUserProvider } from "./context/LogedUserContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from "./pages/SignUpPage.jsx";
import Habits from './pages/Habits.jsx';
import Today from "./pages/Today.jsx";
import History from "./pages/History.jsx";

function App() {
  axios.defaults.headers.common['Authorization'] = 'M813n9erPvENXeuGPzKDL1Iu';

  return (
    <>
      <LogedUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/> }/>
            <Route path="/cadastro" element={<SignUpPage/> }/>
            <Route path="/habitos" element={<Habits/> }/>
            <Route path="/hoje" element={<Today/> }/>
            <Route path="/historico" element={<History/> }/>
          </Routes>
        </BrowserRouter>
      </LogedUserProvider>
    </>
  );
}

export default App;
