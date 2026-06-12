import { useNavigate } from "react-router-dom"
import { useState } from "react";
import "../index.css"

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    function logar() {

        const input1 = document.getElementById("input_email");
        const input2 = document.getElementById("input_senha");

        box_erro1.innerHTML = ``;
        box_erro2.innerHTML = ``;

        input1.classList.remove("nao-preenchido");
        input2.classList.remove("nao-preenchido");

        if (!email || !senha) {
            if (email == "") {
                input1.classList.add("nao-preenchido");
                box_erro1.innerHTML = `Campo não inserido!`;
                setTimeout(() => {
                    input1.classList.remove("nao-preenchido");
                    box_erro1.innerHTML = ``;
                }, 2500);
            }
            if (senha == "") {
                input2.classList.add("nao-preenchido");
                box_erro2.innerHTML = `Campo não inserido!`;
                setTimeout(() => {
                    input2.classList.remove("nao-preenchido");
                    box_erro2.innerHTML = ``;
                }, 2500);
            }
        }
        else if (!email.includes("@") || !email.includes("@gmail.com")) {
            input1.classList.add("nao-preenchido");
            box_erro1.innerHTML = `Email inválido!`;
            setTimeout(() => {
                input1.classList.remove("nao-preenchido");
                box_erro1.innerHTML = ``;
            }, 2500);
        }
        else {
            navigate("/produtos");
        }

    }

    return (
        <div className="flex bg-gray-200 w-screen h-screen items-center justify-center">
            <div className="flex w-2/5 h-120 rounded-xl bg-gray-300 p-10 items-center justify-center">
                <div className="text-center">
                    <div className="">
                        <h2 className="text-2xl mb-2 text-left">Email:</h2>
                        <input type="text" className="bg-white rounded border border-transparent px-3 py-2 w-full" placeholder="exemplo@gmail.com" id="input_email" onChange={(e) => setEmail(e.target.value)} /><br />
                        <div className="h-5 text-red-600 text-xs mt-1" id="box_erro1"></div>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl mb-2 text-left">Senha:</h2>
                        <input type="password" className="bg-white rounded border-transparent px-3 py-2 w-full" placeholder="***********" id="input_senha" onChange={(e) => setSenha(e.target.value)} /><br />
                        <div className="h-5 text-red-600 text-xs mt-1" id="box_erro2"></div>
                    </div>

                    <p className="text-sm mt-2">Não tem uma conta? Cadastre-se <button className="font-bold underline cursor-pointer text-amber-500 hover:text-orange-600 transition-all" onClick={() => navigate("/cadastro")}>aqui!</button></p><br />

                    <button onClick={() => logar()} className="rounded px-6 py-2 bg-amber-500 hover:bg-orange-600 hover:text-white self-center cursor-pointer transition-all">Entrar</button>
                </div>
            </div>

        </div>
    )
}