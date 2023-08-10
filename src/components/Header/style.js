import styled from "styled-components";

const Container = styled.div`

    height: auto;
    gap: 15px;
    padding: 40px 80px;
    background-color: black;
`;

const TopContent = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.9;
`;

const TopLeftContent = styled.div`

    display: flex;
    align-items: center;
    gap: 20px;

    cursor: pointer;
    transition: all .2s;

    &:hover {
        opacity: 0.7;
    }

    img {
        width: 48px;
        height: 48px;
    }

    h1 {
        font-size: 36px;
        font-weight: 800;
        color: #FFF;
    }
`;

const TopRightContent = styled.div`

    display: flex;
    align-items: center;
    gap: 40px;

    h2 {
        font-size: 24px;
        font-weight: 500;
        color: #FFF;
        cursor: pointer;
        transition: all .2s;

        &:hover {
            opacity: 0.7;
        }
    }

    .register {

        border: 2px solid #fff;
        border-radius: 5px;
        padding: 10px;
    }
`;


export {
    Container,
    TopContent,
    TopLeftContent,
    TopRightContent
}