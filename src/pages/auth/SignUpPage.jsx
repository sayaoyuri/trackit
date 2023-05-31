import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BASE_URL } from '../../constants';
import { Form } from './formStyle';
import trackitLogo from '../../assets/style/images/TrackIt.svg';
import { ThreeDots } from 'react-loader-spinner';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [fieldStatus, setFieldStatus] = useState ( false );

  const navigate = useNavigate();

  function signUp(ev) {
    ev.preventDefault();

    setFieldStatus(true);

    const userData = {
      email,
      name,
      image,
      password
    };

    axios.post(`${BASE_URL}auth/sign-up`, userData)
      .then(resp => {
        console.log(resp);
        navigate('/');
      })
      .catch(error => {
        alert(error.response.data.message);
        setFieldStatus(false)
      });
  }

  return (
      <Form onSubmit={signUp}>
        <img src={trackitLogo} alt="Trackit Logo" />
        <input 
          type="email" 
          placeholder='email' 
          required
          disabled={fieldStatus}
          value={email} 
          onChange={(ev) => setEmail(ev.target.value)} 
        />
        <input 
          type="password" 
          placeholder='senha' 
          required
          disabled={fieldStatus}
          value={password} 
          onChange={(ev) => setPassword(ev.target.value)} 
        />
        <input 
          type="text" 
          placeholder='nome' 
          required
          disabled={fieldStatus}
          value={name} 
          onChange={(ev) => setName(ev.target.value)} 
        />
        <input 
          type="text" 
          placeholder='foto' 
          required
          disabled={fieldStatus}
          value={image} 
          onChange={(ev) => setImage(ev.target.value)} 
        />
        <button type='submit' disabled={fieldStatus}>
          {!fieldStatus ? 'Cadastrar' : <ThreeDots width="60" height="60" color="#ffffff" />}
        </button>
        <Link to='/'>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </Form>
  );
}

export default SignUpPage;