import styled from "styled-components";
import { useState } from "react";
import { Grid } from "react-loader-spinner";
import checkImg from ".././assets/check.svg";

export default function HabitoDeHoje({habitosDeHoje,setAtualiza,atualiza}){
    const [disable, setDisable] = useState(false);
    const done = habitosDeHoje.done;
    const isHigh = (habitosDeHoje.currentSequence >= habitosDeHoje.highestSequence);

    function check() {
        alert("marca")
      }
    
      function tiraCheck() {
        alert("desmarca")
      }
    return(
    <Container done={done}>
      <DivTexto>
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
        <CheckBox onClick={tiraCheck} check={done}>
          {disable ? (
            <Grid color="#FFFFFF" height={30} width={30} />
          ) : (
            <img src={checkImg} alt="check" />
          )}
        </CheckBox>
      ) : (
        <CheckBox onClick={check} check={done}>
          {disable ? (
            <Grid color="#8FC549" height={30} width={30} />
          ) : (
            <img src={checkImg} alt="tiraCheck" />
          )}
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