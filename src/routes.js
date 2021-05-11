import Cadastro from "./componentes/Cadastro";
import Home from "./componentes/Home";
export const routes = [
    {path: "/", component: Home, titulo: "Home"},
    {path: "/cadastro", component: Cadastro, titulo: "Cadastro"}
];