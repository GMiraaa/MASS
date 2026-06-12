import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function Home() {
    return (
        <main className="flex w-screen h-screen">
            <Sidebar></Sidebar>

            <div>
                <p>Teste home</p>
            </div>
        </main>
    )
}