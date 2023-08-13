import styled from "styled-components";

const Container = styled.div`

    padding: 10px 80px;
    background-color: black;
    border-bottom: 2px solid #fff;
    
    @media (max-width: 976px) {
        padding: 10px 25px;
        overflow-x: scroll;
    }
`;

export {
    Container,
}