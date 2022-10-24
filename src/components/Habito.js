import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./context/UserContext";
import {deletaHabito} from "./services/services"

export default function Habito({habit,daysSelected}){
    const { setAtualiza, atualiza } = useContext(UserContext);
    const dias = [
        { dia: "domingo", id: 0, sigla: "D" },
        { dia: "segunda", id: 1, sigla: "S" },
        { dia: "terca", id: 2, sigla: "T" },
        { dia: "quarta", id: 3, sigla: "Q" },
        { dia: "quinta", id: 4, sigla: "Q" },
        { dia: "sexta", id: 5, sigla: "S" },
        { dia: "sabado", id: 6, sigla: "S" },
      ];
    function excluiHabito(){
            deletaHabito(habit.id)
              .then((resp) => {
                setAtualiza(!atualiza);
              })
              .catch((error) => alert("Ocorreu um erro ao deletar o hábito!"));
    }
    return(
        <Container>
            <h1>{habit.name}</h1>
            <DivHabito>
                {dias.map((day,key)=>daysSelected.includes(day.id)?(<CheckBox className="marcada" key={key}>{day.sigla}</CheckBox>)
                :
                (<CheckBox key={key}>{day.sigla}</CheckBox>))}
            </DivHabito>
            <ion-icon onClick={excluiHabito} name="trash-outline"></ion-icon>
        </Container>
    )
}
const Container = styled.section`
  position: relative;
  height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  h1 {
    margin: 13px 0px 8px 15px;
    color: #666666;
    font-size: 20px;
    font-weight: 400;
  }
  ion-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #666666;
    cursor:pointer;
  }
`;

const DivHabito = styled.div`
  display: flex;
  margin-left: 15px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 400;
  }
  div + div {
    margin-left: 4px;
  }
`;

const CheckBox = styled.div`
    color: #dbdbdb;
    background-color: #ffffff;      
  &.marcada{
    color: #ffffff;
    background-color: #d4d4d4; 
  }
`;
