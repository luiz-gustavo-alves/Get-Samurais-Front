import styled from "styled-components";

const Container = styled.div`

    opacity: ${props => props.showAddOption ? 0.3 : 1};
    pointer-events: ${props => props.showAddOption ? "none" : "auto"};
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 60px;
    background-color: #000;
    border-bottom: 2px solid #FFF;
`;

const Title = styled.h2`

    font-size: 42px;
    padding: 0 20px;
    color: #fff;

    @media (max-width: 450px) {
        font-size: 34px;
        line-height: 44px;
        text-align: center;
    }
`;

const CreateServiceContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-bottom: 40px; 
    gap: 30px;

    h2 {
        font-size: 34px;
        color: #fff;
    }

    img {
        width: 46px;
        height: 46px;
        cursor: pointer;
    }

    @media (max-width: 450px) {

        h2 {
            font-size: 26px;
            line-height: 36px;
            text-align: center;
        }

        img {
            width: 36px;
        }
    }
`;

export {
    Container,
    TitleContainer,
    Title,
    CreateServiceContainer
}