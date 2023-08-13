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

export {
    Container,
    Content,
    Title,
    DescriptionContainer,
    Description
}