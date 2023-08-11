import styled from "styled-components";

const Content = styled.div`

    display: flex;
    position: relative;
    gap: 50px;

    ::-ms-reveal {
        filter: invert(100%);
        color: inherit;
    }
`

export default Content;