import styled from "styled-components";

import { samuraiWp3 } from "../../assets/images/Backgrounds";

const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 75%;
    max-width: 800px;
    border-radius: 40px;
    align-items: center;
    padding: 40px;
    background-color: #000;
    background-image: url(${samuraiWp3});
    background-size: 100% 555px;
    background-repeat: no-repeat;
    
    @media (max-width: 800px) {
        width: 90%;
    }
`;

const Title = styled.h2`

    font-size: 52px;
    font-weight: 600;
    color: #FFF;
    position: absolute;
    top: 48px;
`;

const FormLoader = styled.div`

    position: absolute;
    bottom: 153px;
`;


export {
    Form,
    Title,
    FormLoader
}