import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css"

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confsenha, setConfSenha] = useState("");

    const validacoes = {
        tamanho: senha.length >= 6,
        maiuscula: /[A-Z]/.test(senha),
        minuscula: /[a-z]/.test(senha),
        numero: /[0-9]/.test(senha),
        especial: /[^a-zA-Z0-9]/.test(senha)
    };

    const navigate = useNavigate();

    function cadastrar() {

        const input1 = document.getElementById("input1");
        const input2 = document.getElementById("input2");
        const input3 = document.getElementById("input3");
        const input4 = document.getElementById("input4");
        const input5 = document.getElementById("input5");

        box_erro1.innerHTML = ``;
        box_erro2.innerHTML = ``;
        box_erro3.innerHTML = ``;
        box_erro4.innerHTML = ``;
        box_erro5.innerHTML = ``;

        input1.classList.remove("nao-preenchido");
        input2.classList.remove("nao-preenchido");
        input3.classList.remove("nao-preenchido");
        input4.classList.remove("nao-preenchido");
        input5.classList.remove("nao-preenchido");

        if (!nome || !sobrenome || !email || !senha || !confsenha) {
            if (!nome) {
                input1.classList.add("nao-preenchido");
                box_erro1.innerHTML = `Campo não inserido!`;
                setTimeout(() => {
                    box_erro1.innerHTML = ``;
                    input1.classList.remove("nao-preenchido");
                }, 2500);
            }
            if (!sobrenome) {
                input2.classList.add("nao-preenchido");
                box_erro2.innerHTML = `Campo não inserido!`;
                setTimeout(() => {
                    input2.classList.remove("nao-preenchido");
                    box_erro2.innerHTML = ``;
                }, 2500);
            }
            if (!email) {
                input3.classList.add("nao-preenchido");
                box_erro3.innerHTML = `Campo não inserido!`;
                setTimeout(() => {
                    input3.classList.remove("nao-preenchido");
                    box_erro3.innerHTML = ``;
                }, 2500);
            }
            if (!senha) {
                input4.classList.add("nao-preenchido");
                box_erro4.innerHTML = `Campo não inserido!`;
                setTimeout(() => {
                    input4.classList.remove("nao-preenchido");
                    box_erro4.innerHTML = ``;
                }, 2500);
            }
            if (!confsenha) {
                input5.classList.add("nao-preenchido");
                box_erro5.innerHTML = `Campo não inserido!`;
                setTimeout(() => {
                    input5.classList.remove("nao-preenchido");
                    box_erro5.innerHTML = ``;
                }, 2500);
            }
        }
        else if (senha != confsenha) {
            input5.classList.add("nao-preenchido");
            box_erro5.innerHTML = `Senhas diferentes!`;
            setTimeout(() => {
                input5.classList.remove("nao-preenchido");
                box_erro5.innerHTML = ``;
            }, 2500);
        }
        else {

            navigate("/login");

        }

    }

    return (
        <div className="flex bg-gray-200 w-screen h-screen items-center justify-center">
            <div className="flex w-2/5 h-195 rounded-xl bg-gray-300 p-10 items-center justify-center">
                <button onClick={() => navigate("/login")} className="text-orange-400 hover:text-orange-600 font-bold transition-all cursor-pointer absolute top-28 left-145 rounded px-5 py-2">Voltar</button>
                <div className="text-center">

                    {/* Nome e Sobrenome */}

                    <div className="flex gap-5">
                        <div className="">
                            <h2 className="text-2xl mb-2 text-left">Nome <span className="text-red-600">*</span></h2>
                            <input id="input1" type="text" placeholder="Como te chamamos?" className="bg-white border border-transparent rounded px-3 py-2 w-full" onChange={(e) => setNome(e.target.value)} /><br />
                            <div className="h-4 text-red-600 text-xs mt-1 mb-1" id="box_erro1"></div>
                        </div>
                        <div>
                            <h2 className="text-2xl mb-2 text-left">Sobrenome <span className="text-red-600">*</span></h2>
                            <input id="input2" type="text" placeholder="Seu sobrenome" className="bg-white border border-transparent rounded px-3 py-2 w-full" onChange={(e) => setSobrenome(e.target.value)} /><br />
                            <div className="h-4 text-red-600 text-xs mt-1 mb-1" id="box_erro2"></div>
                        </div>
                    </div>

                    {/* Email */}

                    <div>
                        <h2 className="text-2xl mb-2 text-left">Email <span className="text-red-600">*</span></h2>
                        <input id="input3" type="text" placeholder="Seu melhor email!" className="bg-white border border-transparent rounded px-3 py-2 w-full" onChange={(e) => setEmail(e.target.value)} /><br />
                        <div className="h-4 text-red-600 text-xs mt-1 mb-1" id="box_erro3"></div>
                    </div>

                    {/* Senha e confirmação de senha */}

                    <div className="h-95">
                        <div>
                            <h2 className="text-2xl mb-2 text-left">Senha <span className="text-red-600">*</span></h2>
                            <input id="input4" type="password" className="bg-white border border-transparent rounded px-3 py-2 w-full" placeholder="**********" onChange={(e) => setSenha(e.target.value)} /><br />
                            <div className="h-4 text-red-600 text-xs mt-1 mb-1" id="box_erro4"></div>
                        </div>

                        <div className="h-40 border border-gray-400/20 p-2 rounded-2xl mb-2">
                            <p>Sua senha deve ter:</p>
                            <div className="flex flex-col text-xs text-justify font-semibold gap-2">
                                <p className={validacoes.tamanho ? "text-green-600" : "text-red-600"}>Mínimo de 6 caracteres</p>
                                <p className={validacoes.especial ? "text-green-600" : "text-red-600"}>Possui caracteres especiais</p>
                                <p className={validacoes.numero ? "text-green-600" : "text-red-600"}>Possui numero</p>
                                <p className={validacoes.maiuscula ? "text-green-600" : "text-red-600"}>Possui letra MAIÚSCULA</p>
                                <p className={validacoes.minuscula ? "text-green-600" : "text-red-600"}>Possui letra minúscula</p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <h2 className="text-2xl mb-2 text-left">Confirme sua senha <span className="text-red-600">*</span></h2>
                            <input id="input5" type="password" className="bg-white border border-transparent rounded px-3 py-2 w-full" placeholder="**********" onChange={(e) => setConfSenha(e.target.value)} /><br />
                            <div className="h-4 text-red-600 text-xs mt-1 mb-1" id="box_erro5"></div>
                        </div>
                    </div>


                    <p className="text-xs text-gray-500 text-left font-bold">(*) Item obrigatório</p><br />
                    <button onClick={() => cadastrar()} className="rounded px-6 py-2 bg-amber-500 hover:bg-orange-600 hover:text-white self-center transition-all">Cadastrar</button>
                </div>
            </div>

        </div>
    )
}