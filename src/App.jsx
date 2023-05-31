import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/auth/LoginPage.jsx';

function App() {
  axios.defaults.headers.common['Authorization'] = 'M813n9erPvENXeuGPzKDL1Iu';

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
