import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { ThreeDots } from "react-loader-spinner";
import DiaDasemana from "./DiaDaSemana"
import {postHabito} from "./services/services"

export default function FormularioHabito({criarHabito,setCriarHabito}){
    const letras= ["D", "S", "T", "Q", "Q", "S", "S"];
    const [disabled,setDisabled]=useState(false);
    const [days,setDays]=useState([]);
    const [habit, setHabit]= useState({name: "", days,});
    const {atualiza,setAtualiza}= useContext(UserContext);

useEffect(() => {
  setHabit({ ...habit, days });
}, [days]);

function enviarHabito(e){
    e.preventDefault();
    setDisabled(!disabled);
    console.log(habit);
    postHabito(habit)
      .then((res) => {
        setDisabled(false);
        setAtualiza(!atualiza);
        setCriarHabito(false);
        setDays([]);
        setHabit({
          name: "",
          days,
        });
      })
      .catch((error) => {
        alert(
          "Campos inválidos, verifique se selecionou pelo menos um dia e colocou um nome para seu hábito!"
        );
        setDisabled(false);
      });
}
function preencheImput(e) {
    setHabit({ ...habit, [e.target.name]: e.target.value });
}

    return(
    <Container criarHabito={criarHabito}>
      <form onSubmit={enviarHabito}>
        <input data-identifier="input-habit-name"
          autoComplete="off"
          disabled={disabled}
          onChange={preencheImput}
          name="name"
          value={habit.name}
          type="text"
          placeholder="nome do hábito"
        />
        <DivDias>
          {letras.map((day, index) => (
              <DiaDasemana 
              days={days}
              setDays={setDays}
              key={index}
              dayNumber={index}
              >{day}</DiaDasemana>
          ))}
        </DivDias>
        <Botoes disabled={disabled}>
          <h5 data-identifier="cancel-habit-create-btn"
            onClick={() => {
              setCriarHabito(false);
            }}
          >
            Cancelar
          </h5>
          <button data-identifier="save-habit-create-btn" disabled={disabled} type="submit">
            {!disabled ? (
              "Salvar"
            ) : (
              <ThreeDots color="#FFFFFF" height={40} width={40} />
            )}
          </button>
        </Botoes>
      </form>
    </Container>
    )
}
const Container = styled.div`
  display: ${(props) => (props.criarHabito ? "visible" : "none")} !important;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: #ffffff;
  margin-top: 20px;
  min-height: 180px;
  border-radius: 5px;
  input {
    margin: 18px 0px 8px 18px;
    font-size: 18px;
    padding-left: 11px;
    width: 303px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
  }
  input::placeholder {
    color: #d4d4d4;
    font-size: 20px;
  }
  input:focus {
    outline: 0;
    box-shadow: 0;
  }
`;

const Botoes = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 15px;
  right: 16px;
  h5 {
    color: #52b6ff;
    font-weight: 400;
    font-size: 15.976px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 23px;
    width: 84px !important;
    height: 35px;
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 400;
    font-size: 15.976px !important;
    opacity: ${(props) => (props.disabled ? "0.7" : "1")};
  }
`;

const DivDias = styled.section`
  display: flex;
  margin-left: 18px;
  div + div {
    margin-left: 4px;
  }
`;