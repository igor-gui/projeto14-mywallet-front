import { Link } from 'react-router-dom'
import Formu from '../style/Formu'
import UserForm from '../style/UserForm'
export default function SignIn() {

    return (
        <UserForm>
            <h1>MyWallet</h1>
            <Formu>
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input className="button" type="submit" value="Entrar" />
            </Formu>
            <Link to='/sing-up'>Primeira vez? Cadastre-se!</Link>
        </UserForm>
    )
}