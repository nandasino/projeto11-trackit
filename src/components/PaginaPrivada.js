import Navbar from "./comum/Navbar";
import Footer from "./comum/Footer";
import { Navigate } from "react-router-dom";

export default function PaginaPrivada({ children }) {
  const autenticacao = JSON.parse(localStorage.getItem("trackit"));

  if (autenticacao) {
    return (
      <>
        <Navbar image={autenticacao.image}/>
        {children}
        <Footer />
      </>
    );
  } else {
    <Navigate to="/" />;
  }
}