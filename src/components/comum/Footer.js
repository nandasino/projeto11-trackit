import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function Footer() {
  const { porcentagem } = useContext(UserContext);

  return (
    <Container>
      <Link data-identifier="habit-page-action" to="/habitos">Hábitos</Link>
      <Link to="/hoje">
        <DivCirculo>
          <CircularProgressbar
            value={porcentagem}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#FFF",
              pathColor: "#FFF",
              trailColor: "transparent",
            })}
          />
        </DivCirculo>
      </Link>
      <Link data-identifier="historic-page-action" to="/historico">Histórico</Link>
    </Container>
  );
}

const Container = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  a {
    text-decoration: none;
    color: #52B6FF;
    font-size: 18px;
    font-weight: 400;
  }
`;

const DivCirculo = styled.div`
  width: 91px;
  height: 91px;
  position: absolute;
  bottom: 15px;
  left: calc(50% - 45.5px);
`;