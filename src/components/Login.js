import { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { postLogin } from "./services/services"

import UserContext from "./context/UserContext";
import Logo from "../assets/Logo.svg";

export default function Login(){
  const [desabilitado, setDesabilitado] = useState(false);
  const [loginUsuario, setLoginUsuario] = useState({});
  const [mostraSenha, setMostraSenha] = useState("password");  

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function atualizaImput(e) {
    setLoginUsuario({
        ...loginUsuario,
        [e.target.name]: e.target.value
    })
  }
  
    function enviaForm(e){
      e.preventDefault();
      setDesabilitado(true);
      postLogin(loginUsuario).then((response) => {
        setUser(response.data);
        const JSONauth = JSON.stringify({
          token: response.data.token,
          image: response.data.image,
        });
        localStorage.setItem("trackit", JSONauth);
        setDesabilitado(false);
        navigate("/hoje");
      })
      .catch((error) => {
        alert("E-mail ou senha incorretos!");
        setDesabilitado(false);
      });     
    }

    return(
    <Container desabilitado={desabilitado}>
      <img src={Logo} alt="Logo" />
      <form onSubmit={enviaForm}>
        <input
          autoComplete="off"
          required
          desabilitado={desabilitado}
          name="email"
          type="email"
          placeholder="email"
          onChange={atualizaImput}
        />
        <DivImput>
          <input
            required
            desabilitado={desabilitado}
            name="password"
            type={mostraSenha}
            placeholder="senha"
            onChange={atualizaImput}
          />
          <div>
            <ion-icon
              onClick={() => {
                setMostraSenha("text");
                if (mostraSenha === "text") {
                  setMostraSenha("password");
                }
              }}
              name="eye-outline"
            ></ion-icon>
          </div>
        </DivImput>
        <button desabilitado={desabilitado} type="submit">
          {!desabilitado ? (
            "Entrar"
          ) : (
            <ThreeDots color="#FFFFFF" height={80} width={80} />
          )}
        </button>
      </form>
      <Link to={`/cadastro`}>Não tem uma conta? Cadastre-se!</Link>
    </Container>
    )
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 68px;
    margin-bottom: 32px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    padding-left: 10px;
    width: 289px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 15px;
  }
  input[name="password"] {
    width: 257px;
    border-radius: 5px 0px 0px 5px;
    border-left: 1px solid #d5d5d5;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    border-right: none;
  }
  input::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    font-weight: 400;
  }
  input:focus {
    box-shadow: 0;
    outline: 0;
  }
  button {
    font-family: "Lexend Deca";
    border: none;
    background-color: #52b6ff;
    border-radius: 4.5px;
    width: 303px;
    height: 45px;
    color: #ffffff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.desabilitado ? "0.7" : "1")};
  }
  a {
    color: #52b6ff;
    font-size: 14px;
    align-self: center;
    margin-top: 25px;
  }
  ion-icon {
    color: #b5b5b5;
    font-size: 30px;
    padding-right: 10px;
  }
`;

const DivImput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 47px;
    margin-bottom: 6px;
    border-radius: 0px 5px 5px 0px;
    border-right: 1px solid #d5d5d5;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
  }
`;