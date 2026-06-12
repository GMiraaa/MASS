import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../index.css"

export default function Sidebar() {

    const navigate = useNavigate();

    const links = [];

    return (
        <main className="">
            <aside className="w-64 h-screen bg-amber-500 flex flex-col">
                <div className="flex flex-col h-screen text-center justify-around">
                    <div>
                        <p className="text-white">Olá, <b>teste</b></p>
                    </div>
                    <div className="text-white">
                        <ul>
                            <li>Produtos</li>
                            <li>Dashboard</li>
                        </ul>
                    </div>
                    <div className="">
                        <button className="cursor-pointer font-bold text-white px-5 py-2 hover:bg-[#7e7e7e75] rounded transition-all" onClick={() => navigate("/login")}>Sair</button>
                    </div>
                </div>
            </aside>
        </main>
    );

}