import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem 0.5rem 1rem;
    background-color: #EBECF0;

    h3 {
        margin-top: 0.75rem;
        font-size: 1.5rem;
        color: var(--black);
    }

    h4 {
        margin-top: 0.5rem;
    }
`;

export const ImageContent = styled.div`
    width: 230px;
    height: 230px;
    opacity: 0.9;
    background: url(${(props)=> props.imageURL});
    background-repeat: none;
    background-size: cover;
    transition: 400ms;
    border-radius: 8px;
    :hover {
        opacity: 1;
        zoom: 1.01;
        border-radius: 0px;
    }
`;