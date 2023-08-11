import styled from "styled-components";

import { samuraiWp2 } from "../../../assets/images/Backgrounds";

const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 90%;
    max-width: 900px;
    border-radius: 40px;
    align-items: center;
    margin-top: 10px;
    padding: 30px;
    background-color: #000;
    background-image: url(${samuraiWp2});
    background-position: center;
    background-size: 350px;
    background-repeat: no-repeat;
`;

const Title = styled.h2`

    font-size: 52px;
    font-weight: 600;
    color: #FFF;
    position: absolute;
    top: 8px;
`;

export {
    Form,
    Title
}