import styled from "styled-components";

import { samuraiWp1 } from "../../../assets/images/Backgrounds";

const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 95%;
    max-width: 700px;
    border-radius: 40px;
    align-items: center;
    margin-top: 40px;
    padding: 30px;
    background-color: #000;
    background-image: url(${samuraiWp1});
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 800px) {
        width: 90%;
    }
`;

const Title = styled.h2`

    font-size: 37px;
    font-weight: 600;
    text-align: center;
    color: #FFF;
    position: absolute;
    top: 18px;
    padding: 0 30px;

    @media (max-width: 800px) {
        font-size: 25px;
        top: 28px;
    }

    @media (max-width: 414px) {
        font-size: 18px;
        top: 34px;
    }
`;

const Label = styled.h2`

    font-size: 26px;
    font-weight: 900;
    line-height: 25px;
    color: #FFF;
    position: absolute;
    padding: 3px 6px;
    top: -15px;
    left: 10px;
    border: none;
`;

const DropDown = styled.div`

    display: flex;
    position: relative;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

const DropDownValue = styled.div`

    display: flex;
    align-items: center;
    width: 557px;
    height: 60px;
    padding: 10px 20px 5px 20px;
    font-size: 18px;
    font-weight: 700;
    background: none;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.4) 111px 18px 36px -18px inset;
`;

const DropDownContent = styled.select`

    background: #FFF;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: 600;
`;

const FormLoader = styled.div`

    position: absolute;
    bottom: 7px;
    right: 52px;
`;

export {
    Form,
    Title,
    Label,
    DropDown,
    DropDownValue,
    DropDownContent,
    FormLoader
}