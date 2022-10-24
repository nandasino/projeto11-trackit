import { useContext } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import UserContext from "./context/UserContext";
import HabitoDeHoje from "./HabitoDeHoje";
import { pegaHabitosHoje } from "./services/services";

import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/pt-br";


export default function Hoje(){
    const [habitosDeHoje, setHabitosDeHoje]= useState([]);
    const { atualiza, setAtualiza, porcentagem, setPorcentagem } = useContext(UserContext);

    dayjs.extend(updateLocale);
    dayjs.updateLocale("pt-br", {
      diasDaSemana: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    });
    
    const hoje = dayjs().locale("pt-br").format("dddd, DD/MM");

    useEffect(() => {
        pegaHabitosHoje()
          .then((response) => {
            setHabitosDeHoje(response.data);
            const done = response.data.filter((e) => e.done);
            const porcentagemHoje = Math.ceil(
              (done.length / response.data.length) * 100
              );
            if (isNaN(porcentagemHoje)) {
              setPorcentagem(0);
            } else {
              setPorcentagem(porcentagemHoje);
            }
          })
          .catch((error) => alert("Ocorreu um erro ao ver os hábitos do dia!"));
        }, [atualiza]);

    return(
        <>
        <Container>
          <Texto>
            <h1 data-identifier="today-infos">{hoje}</h1>
            {porcentagem <= 0 ? (
              <h2>Nenhum hábito concluído ainda</h2>
            ) : (
              <h3>{porcentagem.toFixed()}% dos hábitos concluídos</h3>
            )}
          </Texto>
          <CheckBox>
            {habitosDeHoje.map((habit, index) => (
              <HabitoDeHoje
                key={index}
                habitosDeHoje={habit}
                setAtualiza={setAtualiza}
                atualiza={atualiza}
              />
            ))}
          </CheckBox>
        </Container>  
        </>
    )
}

const Container = styled.section`
  padding-top: 70px;
  min-height: 100vh;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin: 28px 0px 6px 0px;
    font-weight: 400;
    font-size: 23px;
    color: #126ba5;
  }
  h2 {
    margin-bottom: 18px;
    color: #bababa;
    font-size: 18px;
    font-weight: 400;
  }
  h3 {
    margin-bottom: 18px;
    color: #8fc549;
    font-size: 18px;
    font-weight: 400;
  }
`;

const CheckBox = styled.main`
  width: 90%;
`;

const Texto = styled.span`
  width: 90%;
`;