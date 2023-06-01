import axios from "axios";
import { LogedUserProvider } from "./context/LogedUserContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/auth/LoginPage.jsx';
import SignUpPage from "./pages/auth/SignUpPage.jsx";
import Habits from './pages/habits/Habits.jsx';

function App() {
  axios.defaults.headers.common['Authorization'] = 'M813n9erPvENXeuGPzKDL1Iu';

  return (
    <>
      <LogedUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/> }/>
            <Route path="/cadastro" element={<SignUpPage/> }/>
            <Route path="/hoje" element={<Habits/> }/>
          </Routes>
        </BrowserRouter>
      </LogedUserProvider>
    </>
  );
}

export default App;
