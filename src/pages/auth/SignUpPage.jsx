import { Form } from './formStyle';
import trackitLogo from '../../assets/images/TrackIt.svg';

function SignUpPage() {
  return (
      <Form>
        <img src={trackitLogo} alt="Trackit Logo" />
        <input type="email" placeholder='email' required />
        <input type="password" placeholder='senha' required />
        <input type="text" placeholder='nome' required />
        <input type="text" placeholder='foto' required />
        <button>Entrar</button>
        <p>Já tem uma conta? Faça login!</p>
      </Form>
  );
}

export default SignUpPage;