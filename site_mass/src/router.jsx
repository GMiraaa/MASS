import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

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
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/home",
                element: <Home />
            }
        ]
    }
])

export { router };