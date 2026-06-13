import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import "../index.css"

export default function Sidebar() {

    const navigate = useNavigate();

    const links = [];

    return (
        <main className="">
            <aside className="w-64 h-screen bg-amber-500 flex flex-col">
                <div className="flex flex-col h-screen text-center justify-around">
                    <div className="items-center flex flex-col w-full">
                        <User className="text-white h-20 w-20 mb-2 border-4 rounded-full" />
                        <p className="text-white">Olá, <b>teste</b></p>
                    </div>
                    <div className="text-white text-center">
                        <ul className="">
                            <li><p className="cursor-pointer mb-3 px-3 py-2 rounded border-transparent hover:bg-gray-300/30 transition-all" onClick={() => navigate("/home")}>Home</p></li>
                            <li><p className="cursor-pointer mb-3 px-3 py-2 rounded border-transparent hover:bg-gray-300/30 transition-all" onClick={() => navigate("/produtos")}>Produtos</p></li>
                            <li><p className="cursor-pointer mb-3 px-3 py-2 rounded border-transparent hover:bg-gray-300/30 transition-all" onClick={() => navigate("/dashboard")}>Dashboard</p></li>
                        </ul>
                    </div>
                    <div className="">
                        <button className="cursor-pointer font-bold text-white px-5 py-2 hover:bg-gray-300/30 rounded transition-all" onClick={() => navigate("/login")}>Sair</button>
                    </div>
                </div>
            </aside>
        </main>
    );

}