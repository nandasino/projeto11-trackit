import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./style/GlobalStyle"
import UserContext from "./context/UserContext";
import Login from "./Login"
import Cadastro from "./Cadastro"

import PaginaPrivada from "./PaginaPrivada"
import Hoje from "./Hoje/Hoje"


export default function App(){
    const [porcentagem, setPorcentagem]= useState(0);
    const [user, setUser] = useState(null);

    return(
        <>
        <GlobalStyle/>
        <UserContext.Provider value={{porcentagem, setPorcentagem,user,setUser}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/hoje" element={<PaginaPrivada><Hoje/></PaginaPrivada>}/>
            </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </>

    )
}