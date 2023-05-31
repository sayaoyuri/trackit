import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/auth/LoginPage.jsx';
import SignUpPage from "./pages/auth/SignUpPage.jsx";

function App() {
  axios.defaults.headers.common['Authorization'] = 'M813n9erPvENXeuGPzKDL1Iu';

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/> }/>
          <Route path="/cadastro" element={<SignUpPage/> }/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
