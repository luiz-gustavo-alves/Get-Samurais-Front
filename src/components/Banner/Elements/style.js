import styled from "styled-components";

const Content = styled.div`

    display: flex;
    gap: 35px;
    justify-content: space-between;
    align-items: flex-start;
`;

const Element = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    gap: 10px;

    img {
        width: 48px;
        height: 48px;
    }

    h2 {
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        text-align: center;
        color: #fff;
    }

    cursor: pointer;
    transition: all .2s;

    &:hover {
        opacity: 0.7;
    }
`;

export {
    Content,
    Element
}