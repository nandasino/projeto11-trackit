import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./context/UserContext";
import Login from "./Login"
import Cadastro from "./Cadastro"
import GlobalStyle from "./style/GlobalStyle"

export default function App(){
    const [porcentagem,setPercentagem]= useState(0);

    return(
        <>
        <GlobalStyle/>
        <UserContext.Provider value={{porcentagem,setPercentagem}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </>

    )
}