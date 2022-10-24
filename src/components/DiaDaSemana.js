import styled from "styled-components";
import UserContext from "./context/UserContext";
import { useContext, useEffect, useState } from "react";

export default function DiaDaSemana({children, days, setDays, key}){
    const { atualiza } = useContext(UserContext);
    const [selecionado,setSelecionado]=useState(false);

useEffect(()=>{
    setSelecionado(false);},[atualiza]);

switch (selecionado){
    case false:
        return(
            <DivDia selecionado={selecionado} onClick={()=>{setSelecionado(!selecionado); setDays([...days,key])}}>
            {children}
            </DivDia>
        );
    case true:
        return(
            <DivDia selecionado={selecionado} onClick={()=>{setSelecionado(!selecionado); setDays((e)=>e.filter((days)=>days!==key))}}>
            {children}
            </DivDia>
        );
    default:
        return null;
}

}
const DivDia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => (props.selecionado ? "#FFFFFF" : "#DBDBDB")};
  background-color: ${(props) => (props.selecionado ? "#CFCFCF" : "#FFFFFF")};
`;