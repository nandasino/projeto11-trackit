import styled from "styled-components";
export default function Historico(){
    return(
        <Continer>
          <span>
            <h1>Histórico</h1>
          </span>
          <Texto>
              <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
          </Texto>
        </Continer> 
    )
}
const Continer = styled.section`
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
`;
const Texto = styled.section`
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