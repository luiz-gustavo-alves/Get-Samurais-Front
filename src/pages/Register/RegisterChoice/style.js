import styled from "styled-components";

const Content = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 75%;
    max-width: 900px;
    border-radius: 40px;
    background-color: #000;
    padding: 40px;
`;

const Title = styled.h2`

    font-size: 44px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    position: absolute;
    top: 52px;
`;

const RegisterContent = styled.div`

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    img {
        margin-bottom: 20px;
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
`;

const ContentContainer = styled.div`

    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .2s;

    h3 {
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        color: #FFF;
        cursor: pointer;
    }

    &:hover {
        opacity: 0.7;
    }
`;


export {
    Content,
    Title,
    RegisterContent,
    ContentContainer
}