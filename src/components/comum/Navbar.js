import styled from "styled-components";

export default function Navbar({image}) {

    return (
        <ContainerNavibar>
            <div>
                <h1>TrackIt</h1>
                <img data-identifier="avatar" src={image} alt="User"/>
            </div>
        </ContainerNavibar>
    );
}

const ContainerNavibar = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    font-family: 'Playball';
    width: 100vw;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
    h1 {
        color: #FFFFFF;
        font-size: 39px;
    }
`;