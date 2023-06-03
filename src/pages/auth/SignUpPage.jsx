import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BASE_URL } from '../../constants';
import { Form } from './formStyle';
import trackitLogo from '../../assets/images/TrackIt.svg';
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
          data-test='email-input'
        />
        <input 
          type="password" 
          placeholder='senha' 
          required
          disabled={fieldStatus}
          value={password} 
          onChange={(ev) => setPassword(ev.target.value)} 
          data-test='password-input'
        />
        <input 
          type="text" 
          placeholder='nome' 
          required
          disabled={fieldStatus}
          value={name} 
          onChange={(ev) => setName(ev.target.value)} 
          data-test='user-name-input'
        />
        <input 
          type="text" 
          placeholder='foto' 
          required
          disabled={fieldStatus}
          value={image} 
          onChange={(ev) => setImage(ev.target.value)} 
          data-test='user-image'
        />
        <button type='submit' disabled={fieldStatus} data-test='signup-btn'>
          {!fieldStatus ? 'Cadastrar' : <ThreeDots width="60" height="60" color="#ffffff" />}
        </button>
        <Link to='/' data-test='login-link'>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </Form>
  );
}

export default SignUpPage;