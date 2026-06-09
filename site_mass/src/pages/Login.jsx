import { useNavigate } from "react-router-dom"

export default function login() {

    const navigate = useNavigate();

    function logar(){

        navigate("/produtos");

    }

    return (
        <div className="flex bg-gray-200 w-screen h-screen items-center justify-center">
            <div className="flex w-2/5 h-120 rounded-lg bg-gray-300 p-10 items-center justify-center">
                <div className="">
                    <h2 className="text-2xl">Email:</h2>
                    <input type="text" className="bg-white rounded px-3 py-2" /><br /><br />

                    <h2 className="text-2xl">Senha:</h2>
                    <input type="password" className="bg-white rounded px-3 py-2" /><br />

                    <p className="text-sm mt-2">Não tem uma conta? Cadastre-se <button className="underline cursor-pointer" onClick={() => navigate("/cadastro")}>aqui!</button></p><br />

                    <button onClick={() => logar()} className="rounded px-6 py-2 bg-amber-500 self-center cursor-pointer">Entrar</button>
                </div>
            </div>

        </div>
    )
}