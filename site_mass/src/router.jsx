import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";

const router = createBrowserRouter([
    {
        children: [
            {
                path: "/",
                element: <Navigate to="/login" replace />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/cadastro",
                element: <Cadastro />
            },
            {
                path: "/produtos",
                element: <Produtos />
            }
        ]
    }
])

export { router };