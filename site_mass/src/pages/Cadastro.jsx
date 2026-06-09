import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function cadastro() {

    const navigate = useNavigate();

    return (
        <div className="flex bg-gray-200 w-screen h-screen items-center justify-center">
            <button onClick={() => navigate("/login")} className="cursor-pointer absolute top-5 left-5 rounded bg-amber-200 px-5 py-2">Voltar</button>
            <div className="flex w-2/5 h-120 rounded-lg bg-gray-300 p-10 items-center justify-center">
                <div className="">
                    <h2 className="text-2xl">Email:</h2>
                    <input type="text" placeholder="Seu melhor email!" className="bg-white rounded px-3 py-2" /><br /><br />

                    <h2 className="text-2xl">Senha:</h2>
                    <input type="password" className="bg-white rounded px-3 py-2" /><br /><br />

                    <h2 className="text-2xl">Confirme sua senha:</h2>
                    <input type="password" className="bg-white rounded px-3 py-2" /><br />

                    <br />

                    <button onClick={() => navigate} className="rounded px-6 py-2 bg-amber-500 self-center">Cadastrar</button>
                </div>
            </div>

        </div>
    )
}