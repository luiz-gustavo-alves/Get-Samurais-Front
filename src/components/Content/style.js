import styled from "styled-components";

const Container = styled.div`

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 250px);
    gap: 60px;
`;

const Element = styled.div`

    background-color: #000;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    width: 100%;
    cursor: pointer;
    transition: all .2s;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgba(255, 255, 255, 0.16) 0px 1px 4px, rgb(155, 155, 155) 0px 0px 0px 3px; 
    }
`;

const Details = styled.div`

    padding: 15px;
    display: flex;
    gap: 10px;
    justify-content: space-between;

    h2, h3 {
        overflow: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
`;

const LeftDetails = styled.div`

    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 260px;

    h2 {
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
        color: #fff;
    }

    h3 {
        font-weight: 500;
        font-size: 18px;
        color: #fff;
    }
`;

const RightDetails = styled.div`

    display: flex;
    align-items: center;

    img {
        width: 32px;
        height: 32px;
    }
`;

const Options = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 15px;

    img {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
`;

export {
    Container,
    Element,
    Details,
    LeftDetails,
    RightDetails,
    Options
}