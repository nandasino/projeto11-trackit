import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { pegaHabitos } from "./services/services";
import FormularioHabito from "./FormularioHabito";
import Habito from "./Habito";

export default function Habitos(){
    const { atualiza } = useContext(UserContext);
    const [habitosUsuario, setHabitosUsuario] = useState([]);
    const [criarHabito, setCriarHabito] = useState(false);

    useEffect(() => {
        pegaHabitos()
          .then((response) => setHabitosUsuario(response.data))
          .catch((error) => alert("Ocorreu um erro,logue novamente"));
      }, [atualiza]);

    return(
    <>
        <ContinerHabitos>
          <span>
            <h1>Meus hábitos</h1>
            <button data-identifier="create-habit-btn" disabled={criarHabito} onClick={() => {setCriarHabito(true);}}>+</button>
          </span>
          <FormularioHabito criarHabito={criarHabito} setCriarHabito={setCriarHabito} />
          <CaixaHabito>
            {habitosUsuario.length === 0 ? 
              <p data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
               : 
              habitosUsuario.map((habit, key) => (
                <Habito habit={habit} key={key} daysSelected={habit.days} />
              ))
            }
          </CaixaHabito>
        </ContinerHabitos> 
    </>
    )
}
const ContinerHabitos = styled.section`
  padding-top: 70px;
  min-height: 100vh;
  padding-bottom: 100px;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 28px;
  }
  h1 {
    color: #126ba5;
    font-size: 22px;
    font-weight: 400;
  }
  button {
    background-color: #52b6ff;
    width: 40px;
    height: 35px;
    border: none;
    border-radius: 4.7px;
    color: #ffffff;
    font-size: 27px;
    font-weight: 400;
    cursor:pointer;
  }
`;
const CaixaHabito = styled.section`
  width: 90%;
  margin-top: 28px;
  p {
    color: #666666;
    font-size: 18px;
    font-weight: 400;
  }
  section + section {
    margin-top: 10px;
  }
`;