import styled from "styled-components";

const Container = styled.div`

    padding: 60px 35px;
    margin: 0px auto;
    width: 1000px;

    @media (max-width: 1000px) {
        width: 95%;
    }
`;

const ProfileContent = styled.div`

    display: flex;
    gap: 10px;
    background-color: #000;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;

    @media (max-width: 1000px) {
        flex-direction: column;
        height: auto;
    }
`;

const LeftContent = styled.div`

    height: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 15px;

    img {
        width: 300px;
        object-fit: contain;
    }

    @media (max-width: 1000px) {

        height: auto;
        margin-left: 0;
        margin-top: 20px;

        img {
            width: 50%;
        }
    }
`;

const RightContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    margin: 35px;
    width: 100%;

    h2, h3 {
        overflow: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    h2 {
        font-size: 20px;
        font-weight: 400;
    }

    @media (max-width: 1000px) {
        width: auto;
    }
`;

const TopRightContent = styled.div`

    max-height: 85%;

    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
    }
`;

const DetailsContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 35px;

    h2 {
        font-size: 30px;
        line-height: 38px;
        color: #fff;
    }

    @media (max-width: 600px) {

        h2 {
            font-size: 26px;
        }
    }
`;

const Title = styled.h3`

    font-size: 40px;
    line-height: 50px;
    font-weight: 900;
    color: #fff;

    @media (max-width: 600px) {

        font-size: 30px;
    }
`;

const ServicesContainer = styled.div`

    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;

    h4 {
        font-size: 34px;
        line-height: 44px;
        text-align: center;
        font-weight: 600;
        color: #fff;
        margin: 0 auto;
        padding-bottom: 50px;
    }
`;

export {
    Container, 
    ProfileContent,
    LeftContent,
    RightContent,
    TopRightContent,
    DetailsContainer,
    Title,
    ServicesContainer
}