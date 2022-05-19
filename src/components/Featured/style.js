import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    div {
        h3 {
            font-size: 1.5rem;
            font-weight: 300;
        }

        h4 {
            font-size: 1rem;
            font-weight: 400;
            margin-top: 0.5rem;
        }
    }
`;

export const ImageDestack = styled.div`
    width: 200px;
    height: 300px;
    margin-bottom: 1rem;
    background-size: cover !important;
    background-clip: content-box;
    background: url(${(props)=>props.imageURL}) no-repeat;
`;

export const BuyButton = styled.button`
    flex: 1;
    color: var(--white);
    font-size: 1.25rem;
    font-family: "poppins" sans-serif;
    background-color: var(--primary-ligth);
    border: none;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    align-items: center;
    margin-top: 1rem;
    transition: 300ms;


    :hover {
        opacity: 1;
        background-color: var(--primary);
    }
`;