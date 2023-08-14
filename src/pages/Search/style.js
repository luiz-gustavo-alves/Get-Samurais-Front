import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex-direction: column;
`;

const SearchContainer = styled.form`

    width: 600px;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: center;
    position: relative;

    input {
        width: 100%;
        height: 55px;
        padding: 5px 10px 5px 10px;
        background: none;
        outline: none;
        border: none;
        box-shadow: rgba(200, 200, 200, 0.7) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.4) 111px 18px 36px -18px inset;

        font-size: 22px;
        color: #000;

        &::placeholder {
            font-size: 22px;
            color: #000;
        }
    }

    button {
        width: 50px;
        border: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }

    img {
        width: 32px;
        height: 100%;
        padding: 5px;
        position: absolute;
        bottom: 0;
        right: 150px;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        width: 90%;

        input {
            font-size: 18px;

            &::placeholder {
                font-size: 16px;
            }
        }
    }

    @media (max-width: 400px) {

        img {
            width: 26px;
        }
    }
`;

const DropDown = styled.div`

    display: flex;
    position: relative;
    margin: 0 35px;
`;

const DropDownContent = styled.select`

    background: #FFF;
    border: none;
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    font-weight: 600;
`;

export {
    Container,
    SearchContainer,
    DropDown,
    DropDownContent
}