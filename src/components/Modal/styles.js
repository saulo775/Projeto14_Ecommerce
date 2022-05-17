import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow-x: none;
    overflow-y: none;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
    position:  fixed;

    svg {
        color: var(--white);
        font-size: 2.5rem;
        font-weight: 700;
        position: absolute;
        top: 30px;
        right: 50px;
    }
`;

export const Content = styled.div`
    background-color: var(--white);
    position: relative;
    margin: auto;
    border-radius: 1rem;
    width: 80%;
    height: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ProductImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
    background: url(${(props)=> props.image_url});
    background-repeat: none;
    background-size: cover;
`;


export const ProductInfos = styled.div`
    padding: 2rem;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.25rem;
        word-wrap: wrap;
    }

    ul {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
        font-size: 1rem;
        list-style: none;
        font-weight: 500;
        
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border: 2px solid var(--red);
            border-radius: 50%;
        }

    }
    
    .lastUnits {
        font-size: 1rem;
        color: blue;
        margin-top: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        margin-top: 2rem;
        color: var(--orange);
    }

    
    button {
        color: white;
        border: none;
        background-color: var(--primary-ligth);
        opacity: 1.5;
        font-size: 1.5rem;
        padding: 0.75rem 3rem;
        margin-top: 1rem;
        border-radius: 0.5rem;
        transition: 400ms;

        :hover {
        background-color: var(--primary);
        }
    }
`;
