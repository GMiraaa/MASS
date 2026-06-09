import { useNavigate } from "react-router-dom"

export default function login() {

    const navigate = useNavigate();

    return (
        <div className="">
            <h2>Email:</h2>
            <input type="text" /><br />

            <h2>Senha:</h2>
            <input type="password" /><br />

            <p>Não tem uma conta? Cadastre-se <button onClick={() => navigate("/cadastro")}>aqui!</button></p>

            <button onClick={() => ""}>Entrar</button>
        </div>
    )
}