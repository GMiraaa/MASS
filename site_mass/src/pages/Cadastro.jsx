import { useNavigate } from "react-router-dom";

export default function cadastro (){
    return(
        <div className="">
            <h2>Email:</h2>
            <input type="text" placeholder="Seu melhor email!"/>

            <h2>Senha:</h2>
            <input type="password" />

            <h2>Confirme sua senha:</h2>
            <input type="password" />

            <br />

            <button onClick={() => navigate}>Cadastrar</button>
        </div>
    )
}