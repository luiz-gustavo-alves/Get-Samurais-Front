import styled from "styled-components";

const Container = styled.div`

    padding: 60px 35px;
    margin: 0px auto;
    width: 1000px;
`;

const Content = styled.div`

    display: flex;
    gap: 10px;
    height: 350px;
    background-color: #000;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`;

const LeftContent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 15px;

    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
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
        font-weight: 600;
        -webkit-line-clamp: 3;
    }
`;

const TopRightContent = styled.div`

    max-height: 85%;
`;

const DetailsContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 35px;

    h2 {
        font-size: 34px;
        line-height: 38px;
        font-weight: 900;
        color: #fff;
    }
`;

const PriceContainer = styled.div`

    height: 50px;
    display: flex;
    align-items: center;

    h3 {
        font-size: 30px;
        color: #fff;
        font-weight: 700;
    }

    span {
        text-decoration: underline;
    }
`

const RoleContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 28px;
        color: #fff;
        font-weight: 700;
    }

    img {
        width: 48px;
        height: 48px;
    }
`;

const InfoContainer = styled.div`

    background-color: #000;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    margin: 25px 0;

    p {
        font-size: 22px;
        font-weight: 600;
        text-decoration: underline;
        margin-bottom: 15px;
        color: #fff;
    }

    h3 {
        font-size: 16px;
        line-height: 26px;
        white-space: pre-wrap;
        color: #fff;
    }
`;

const OptionsContainer = styled.div`

    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`;

const OptionButton = styled.button`

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

export {
    Container,
    Content,
    LeftContent,
    RightContent,
    TopRightContent,
    DetailsContainer,
    PriceContainer,
    RoleContainer,
    InfoContainer,
    OptionsContainer,
    OptionButton
};