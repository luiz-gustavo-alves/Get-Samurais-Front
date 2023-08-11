import styled from "styled-components";

const Input = styled.input`

    width: 600px;
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

    &::placeholder {
        font-size: 16px;
        color: #9C9C9C;
    }
`;

export default Input;