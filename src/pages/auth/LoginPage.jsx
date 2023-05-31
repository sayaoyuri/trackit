import { Form } from './formStyle';
import trackitLogo from '../../assets/style/images/TrackIt.svg';

function LoginPage() {
  return (
      <Form>
        <img src={trackitLogo} alt="Trackit Logo" />
        <input type="email" placeholder='email' required />
        <input type="password" placeholder='senha' required />
        <button>Entrar</button>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Form>
  );
}

export default LoginPage;