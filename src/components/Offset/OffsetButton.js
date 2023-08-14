import styled from "styled-components";

const OffsetButton = styled.button`

    width: 180px;
    height: 60px;
    outline: none;
    border: none;
    border-radius: 10px;
    background: none;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.4) 111px 18px 36px -18px inset;
    cursor: pointer;

    &:focus {
        opacity: 0.7;
    }
`;

export default OffsetButton;