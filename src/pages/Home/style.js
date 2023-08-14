import styled from "styled-components";

import { 
    samuraiWp4,
    samuraiWp5
} from "../../assets/images/Backgrounds";

const Container = styled.div`

    height: 600px;
    background-image: url(${samuraiWp4});
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 700px) {
        background-image: url(${samuraiWp5});
    }
`;

const Content = styled.div`

    display: flex;
    flex-direction: column;
    gap: 60px;
    height: 100%;
    padding: 100px;
    user-select: none;

    @media (max-width: 700px) {
        padding: 40px;
    }
`;

const Title = styled.h2`

    font-size: 64px;
    font-weight: 900;
    color: #000;

    @media (max-width: 700px) {
        font-size: 0;
    }
`;

const DescriptionContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 600px;
    height: 100%;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

const Description = styled.h3`

    font-size: 36px;
    line-height: 46px;
    color: #000;

    @media (max-width: 700px) {
        font-size: 0;
    }
`;

const SearchContainer = styled.form`

    display: flex;
    width: 425px;
    position: relative;

    input {
        width: 100%;
        height: 55px;
        padding: 5px 10px 5px 10px;
        background: none;
        outline: none;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.7) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.4) 111px 18px 36px -18px inset;

        font-size: 22px;
        color: #000;

        &::placeholder {
            font-size: 22px;
            color: #000;
        }
    }

    button {
        width: 32px;
    }

    img {
        width: 32px;
        height: 100%;
        padding: 5px;
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export {
    Container,
    Content,
    Title,
    DescriptionContainer,
    Description,
    SearchContainer
}