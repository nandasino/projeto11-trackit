import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { postCadastro } from "./services/services";

export default function Cadastro(){
    const navigate = useNavigate();
    
    const [desabilitado, setDesabilitado] = useState(false);
    const [preencheForm, setpreencheForm] = useState({
      email: "",
      name: "",
      image: "",
      password: "",
    });

    function atualizaImput(element){
        setpreencheForm({ ...preencheForm, [element.target.name]: element.target.value });
    }

    function enviaForm(e){
        e.preventDefault();
        setDesabilitado(true);
    
        postCadastro(preencheForm)
          .then((response) => {
            navigate("/");
          })
          .catch((error) => {
            setDesabilitado(false);
            alert(`
          ${error.response.data.message} 
          Por favor preencha os campos novamente.`);
          });
    }
    return(
        <Container>
        <img src={Logo} alt="Logo" />
        <form onSubmit={enviaForm}>
          <input data-identifier="input-email"
            desabilitado={desabilitado}
            required
            value={preencheForm.email}
            name="email"
            type="email"
            placeholder="email"
            onChange={atualizaImput}
          />
          <input data-identifier="input-password"
            desabilitado={desabilitado}
            required
            value={preencheForm.password}
            name="password"
            type="password"
            placeholder="senha"
            onChange={atualizaImput}
          />
          <input data-identifier="input-name"
            desabilitado={desabilitado}
            required
            value={preencheForm.name}
            name="name"
            type="text"
            placeholder="nome"
            onChange={atualizaImput}
          />
          <input data-identifier="input-photo"
            desabilitado={desabilitado}
            required
            value={preencheForm.image}
            name="image"
            type="url"
            placeholder="foto"
            onChange={atualizaImput}
          />
          <button desabilitado={desabilitado} type="submit">
            {!desabilitado ? (
              "Cadastrar"
            ) : (
              <ThreeDots color="#FFFFFF" height={80} width={80} />
            )}
          </button>
        </form>
        <Link data-identifier="back-to-login-action" to="/">Já tem uma conta? Faça login!</Link>
      </Container>
    );
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
  input::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    font-weight: 400;
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
  }
  button[desabilitado] {
    opacity: 0.7;
  }
  a {
    color: #52b6ff;
    font-size: 14px;
    align-self: center;
    margin-top: 25px;
  }
`;