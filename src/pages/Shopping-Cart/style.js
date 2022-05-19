import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;

export const Main = styled.div`
    display: flex;
    margin: 45px 45px;
    justify-content: space-between;
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    min-height: 55vh;
    background-color: var(--white);
    background-color: #FEFEFE;

    border-radius: 8px;
    padding: 2rem 2rem;
    gap: 1rem;
`

export const Cart = styled.div` 
    display: flex;
    align-items: center;
    background-color: #EDEDED;
    justify-content: space-between;
    padding: 0.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 1rem
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 4px;
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20vw;
    max-height: 50vh;

    border-radius: 20px;
    background-color: var(--red);
    padding: 1rem;
    

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
            font-size: 1.25rem;
            font-weight: 700;
            color: white;
        }

        h3 {
            font-size: 2rem;
            color: white;
        }
    }

    button{
        display: flex;    
        background: #C83967;
        border-radius: 5px;
        border: none;             
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        padding: 1rem 2rem;
    }

    button:hover{    
        background: #EF9784; 
    }
`

export const ButtonAcquisition = styled.button ``