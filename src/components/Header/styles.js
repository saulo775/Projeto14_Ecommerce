import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 4rem;
    background-color: var(--white);
    color: var(--primary);

    h1 {
        font-family: 'Great Vibes', cursive;
        font-size: 2.5rem;
    }

    div {
        display: flex;
        align-items: center;

        nav {
            display: flex;
            gap: 2rem;
            margin-right: 2rem;
            font-size: 1.25rem;
            transition: 300ms;
        }
    }

    svg {
        font-size: 1.8rem;
        margin-left: 2rem;
    }

    svg:hover,
    a:hover {
        color: var(--secondary);
    }
`;