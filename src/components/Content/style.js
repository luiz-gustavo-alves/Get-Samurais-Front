import styled from "styled-components";

const Container = styled.div`

    opacity: ${props => props.showOption ? 0.3 : 1};
    pointer-events: ${props => props.showOption ? "none" : "auto"};
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 250px);
    gap: 60px;

    @media (max-width: 1225px) {
        grid-template-columns: repeat(2, 250px); 
    }

    @media (max-width: 625px) {
        grid-template-columns: repeat(1, 250px); 
    }
`;

const Element = styled.div`

    opacity: ${props => props.opacity === '1' ? 1 : 0.5};
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

const DetailsContainer = styled.div`

    height: ${props => props.showOption ? "175px" : "auto"};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    DetailsContainer,
    Details,
    LeftDetails,
    RightDetails,
    Options
}