import styled from "styled-components";

const Container = styled.form`

    width: 700px;
    height: 700px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background-color: #000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;
`;

const Title = styled.h2`

    font-size: 34px;
    font-weight: 700;
    margin: 0 auto 10px auto;
    color: #fff;
`;

const Content = styled.div`

    display: flex;
    position: relative;
    margin: 16px 0;

    ::-ms-reveal {
        filter: invert(100%);
        color: inherit;
    }
`;

const Input = styled.input`

    width: 660px;
    height: 60px;
    padding: 10px 20px 5px 20px;
    font-size: 18px;
    font-weight: 700;
    background: none;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.4) 111px 18px 36px -18px inset;
`;

const Description = styled.textarea`

    width: 660px;
    height: 100px;
    padding: 30px;
    font-size: 18px;
    font-weight: 700;
    background: none;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.4) 111px 18px 36px -18px inset;
    resize: none;
`;

const Label = styled.h2`

    font-size: 28px;
    font-weight: 900;
    line-height: 25px;
    color: #FFF;
    position: absolute;
    padding: 3px 6px;
    top: -13px;
    left: 10px;
    border: none;
`;

const DropDown = styled.div`

    display: flex;
    position: relative;
    margin: 15px 0;
`;

const DropDownContent = styled.select`

    background: #fff;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: 600;
    color: #000;
`;

const DropDownValue = styled.div`

    display: flex;
    align-items: center;
    width: 557px;
    height: 60px;
    padding: 10px 20px 5px 20px;
    font-size: 18px;
    font-weight: 700;
    background: none;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.4) 111px 18px 36px -18px inset;
`;

const CheckBox = styled.input`
    width: 40px;
    height: 40px;
    margin: 0 auto;
    position: absolute;
    right: 0;
    bottom: -20px;
    cursor: pointer;
`;

const ButtonContainer = styled.div`

    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`

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
    margin: 20px auto;

    &:focus {
        opacity: 0.7;
    }
`;

export {
    Container,
    Title,
    Content,
    Label,
    Input,
    Description,
    DropDown,
    DropDownContent,
    DropDownValue,
    CheckBox,
    ButtonContainer,
    Button
}