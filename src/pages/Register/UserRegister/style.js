import styled from "styled-components";

import { samuraiWp2 } from "../../../assets/images/Backgrounds";

const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 90%;
    max-width: 800px;
    border-radius: 40px;
    align-items: center;
    margin-top: 10px;
    padding: 30px;
    background-color: #000;
    background-image: url(${samuraiWp2});
    background-position: center;
    background-size: 350px;
    background-repeat: no-repeat;

    @media (max-width: 800px) {
        width: 90%;
    }
`;

const Title = styled.h2`

    font-size: 52px;
    font-weight: 600;
    text-align: center;
    color: #FFF;
    position: absolute;
    top: 8px;
    padding: 0 25px;

    @media (max-width: 800px) {
        font-size: 44px
    }

    @media (max-width: 414px) {
        font-size: 28px;
        top: 22px;
    }
`;

const FormLoader = styled.div`

    position: absolute;
    bottom: 80px;
`;

export {
    Form,
    Title,
    FormLoader
}