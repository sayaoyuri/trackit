import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';

import { Form } from './formStyle';
import trackitLogo from '../../assets/style/images/TrackIt.svg';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldStatus, setFieldStatus] = useState ( false );

  return (
      <Form>
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
        <button disabled={fieldStatus}>
          {fieldStatus ? 'Entrar' : <ThreeDots width="60" height="60" color="#ffffff" />}
        </button>
        <Link to='/cadastro'>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </Form>
  );
}

export default LoginPage;