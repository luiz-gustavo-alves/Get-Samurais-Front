import styled from "styled-components";

const Container = styled.div`

    height: auto;
    gap: 15px;
    padding: 20px 80px;
    background-color: black;
    border-bottom: 2px solid #fff;

    @media (max-width: 700px) {
        padding: 20px;
    }
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

    img {
        width: 40px;
        height: 48px;
        cursor: pointer;
    }

    h1 {
        font-size: 40px;
        font-weight: 800;
        color: #FFF;
        cursor: pointer;

        transition: all .2s;
        &:hover {
            opacity: 0.7;
        }
    }

    @media (max-width: 700px) {

        img {
            width: 32px;
        }

        h1 {
            font-size: 30px;
        }
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

    .menu {
        display: none;
    }

    @media (max-width: 700px) {

        h2 {
            display: none;
        }

        .menu {

            display: block;
            cursor: pointer;
            transition: all .2s;

            &:hover {
                opacity: 0.7;
            }
        }
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

const MenuOption = styled.div`

    width: 150px;
    height: 150px;
    position: absolute;
    background-color: #000;
    border: 2px solid #F4F4F4;
    top: 90px;
    right: 0px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

const ProfileOptions = styled.div`

    width: 150px;
    height: 150px;
    position: absolute;
    background-color: #000;
    border: 2px solid #F4F4F4;
    top: 90px;
    right: 34px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;

    @media (max-width: 700px) {
        right: 0px;
    }
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
    MenuOption,
    ProfileOptions,
    Option
}