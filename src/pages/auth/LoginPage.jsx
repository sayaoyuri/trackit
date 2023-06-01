import axios from 'axios';
import { LogedUserContext } from '../../context/LogedUserContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';

import { Form } from './formStyle';
import trackitLogo from '../../assets/style/images/TrackIt.svg';
import { BASE_URL } from '../../constants';

function LoginPage( {setUserData} ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldStatus, setFieldStatus] = useState ( false );

  const { setLogedUser } = useContext(LogedUserContext);  

  function login(ev) {
    ev.preventDefault();
    setFieldStatus(true);

    const userData = {
      email,
      password
    }
    
    axios.post(`${BASE_URL}auth/login`, userData)
      .then(resp => {
        const { email, name, image, token } = resp.data;

        setLogedUser({ email, name, image, token });
      })
      .catch(error => {
        alert(error.response.data.message);
        setFieldStatus(false);
      });
  }

  return (
      <Form onSubmit={login}>
        <img src={trackitLogo} alt="Trackit Logo" />
        <input 
          type="email" 
          placeholder='email' 
          value={email} 
          onChange={(ev) => setEmail(ev.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder='senha' 
          onChange={(ev) => setPassword(ev.target.value)}
          value={password} 
          required
        />
        <button type="submit" disabled={fieldStatus}>
          {!fieldStatus ? 'Entrar' : <ThreeDots width="60" height="60" color="#ffffff" />}
        </button>
        <Link to='/cadastro'>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </Form>
  );
}

export default LoginPage;