import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./style/GlobalStyle"
import UserContext from "./context/UserContext";
import Login from "./Login"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import Historico from "./Historico";

import PaginaPrivada from "./PaginaPrivada"
import Hoje from "./Hoje"


export default function App(){
    const [porcentagem, setPorcentagem]= useState(0);
    const [user, setUser] = useState(null);
    const [atualiza, setAtualiza] = useState(false);

    return(
        <>
        <GlobalStyle/>
        <UserContext.Provider value={{porcentagem, setPorcentagem,user,setUser,atualiza, setAtualiza}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/hoje" element={<PaginaPrivada><Hoje/></PaginaPrivada>}/>
                <Route path="/habitos" element={<PaginaPrivada><Habitos/></PaginaPrivada>}/>
                <Route path='/historico' element={<PaginaPrivada><Historico /></PaginaPrivada>} />
            </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </>

    )
}