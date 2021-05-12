import Cadastro from "./componentes/Cadastro";
import Home from "./componentes/Home";
export const routes = [
    {path: "/", name: 'home', component: Home, titulo: "Home", menu: true},
    {path: "/cadastro", name: 'cadastro', component: Cadastro, titulo: "Cadastro", menu: true},
    {path: "/cadastro/:id", name: 'altera', component: Cadastro, titulo: "Cadastro", menu: false},
    {path: "*", component: Home, menu: false}
];