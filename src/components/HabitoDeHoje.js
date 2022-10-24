import styled from "styled-components";
import { useState } from "react";
import checkImg from ".././assets/check.svg";
import {checkHabito} from "./services/services";
import {desmarcaHabito} from "./services/services";

export default function HabitoDeHoje({habitosDeHoje,setAtualiza,atualiza}){
    const [disable, setDisable] = useState(false);
    const done = habitosDeHoje.done;
    const isHigh = (habitosDeHoje.currentSequence >= habitosDeHoje.highestSequence);

    function check() {
    setDisable(true);
    checkHabito(habitosDeHoje.id)
      .then((response) => {
        setAtualiza(!atualiza);
        setDisable(false);
      })
      .catch((error) => alert("Ocorreu um erro ao marcar o hábito!"));
      }
    
      function tiraCheck() {
        setDisable(true);
        desmarcaHabito(habitosDeHoje.id)
          .then((response) => {
            setAtualiza(!atualiza);
            setDisable(false);
          })
          .catch((error) => alert("Ocorreu um erro ao desmarcar o hábito!"));
      }
    return(
    <Container done={done}>
      <DivTexto data-identifier="today-infos">
        <h2>{habitosDeHoje.name}</h2>
        <p>
          Sequência atual:{" "}
          <DestacaTexto done={done}>{habitosDeHoje.currentSequence} dias </DestacaTexto>
        </p>
        <p>
          Seu recorde: <Recorde isHigh={isHigh} done={done}> {habitosDeHoje.highestSequence} dias</Recorde>
        </p>
      </DivTexto>
      {done ? (
        <CheckBox data-identifier="done-habit-btn" onClick={tiraCheck} check={done}>
            <img src={checkImg} alt="check" />
        </CheckBox>
      ) : (
        <CheckBox onClick={check} check={done}>
            <img src={checkImg} alt="tiraCheck" />
        </CheckBox>
      )}
    </Container>        
    )   
}
const Container = styled.div`
  margin-top: 10px;
  height: 94px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
`;
const CheckBox = styled.div`
  width: 69px;
  height: 69px;
  margin: 0px 15px 0px 0px;
  border-radius: 5px;
  background: ${(props) => (props.check ? "#8FC549" : "#EBEBEB")};
  border: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
`;
const Recorde = styled.strong`
  color: ${(props) => (props.isHigh && props.done ? "#8fc549" : "#666666")};
`;
const DestacaTexto = styled.strong`
  color: ${(props) => (props.done ? "#8fc549" : "#666666")};
`;
const DivTexto = styled.div`
  h2 {
    margin: 0px 0px 7px 15px;
    color: #666666;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    margin: 6px 0px 0px 15px;
    color: #666666;
    font-size: 13px;
    font-weight: 400;
  }
`;