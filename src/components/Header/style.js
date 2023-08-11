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

    img {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }

    .register {

        border: 2px solid #fff;
        border-radius: 5px;
        padding: 10px;
    }
`;

const IconBorder = styled.div`

    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    padding: 3px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s;
    position: relative;
    
    &:hover {
        opacity: 0.7;
    }
`;

const ProfileOptions = styled.div`

    width: 150px;
    height: auto;
    position: fixed;
    background-color: #000;
    border: 2px solid #F4F4F4;
    top: 131px;
    right: 34px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const Option = styled.h3`

    color: #FFF;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        opacity: 0.7;
    }
`;


export {
    Container,
    TopContent,
    TopLeftContent,
    TopRightContent,
    IconBorder,
    ProfileOptions,
    Option
}