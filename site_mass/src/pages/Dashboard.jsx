import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function Dashboard() {

    return (
        <main className="flex w-screen h-screen">
                    <Sidebar></Sidebar>
        
                    <div>
                        <p>Teste dashboard</p>
                    </div>
                </main>
    )

}