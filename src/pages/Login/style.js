import styled from "styled-components";

import { samuraiWp1 } from "../../assets/images/Backgrounds";

const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 75%;
    max-width: 900px;
    border-radius: 40px;
    align-items: center;
    padding: 40px;
    background-color: #000;
    background-image: url(${samuraiWp1});
    background-position: center;
    background-size: 685px 400px;
    background-repeat: no-repeat;
`;

const Title = styled.h2`

    font-size: 52px;
    font-weight: 600;
    color: #FFF;
    position: absolute;
    top: 48px;
`;

export {
    Form,
    Title
}