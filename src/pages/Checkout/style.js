import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 30px; 
    overflow-x: none;
    padding: 40px;
    
    h2{       
        margin-top: 10px;
    }

    h3{
        margin-top: 20px;        
    }

    h2, h3{
        align-self: flex-start;   
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;
        color: #C83967;
    }
`;

export const LeftSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    word-wrap: wrap;
    border-radius: 20px 0 0 20px;
    background-color: #ffffff;
    align-items: left;
    padding: 2rem;

    h1 {
        margin-bottom: 1rem;
    }

    h2, h3 {
        margin-left: 10px;
    }

    input {
        display: flex;
        height: 58px;
        background: #FEFEFE;
        border-radius: 3px;
        margin-bottom: 13px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;        
        padding: 10px;
        outline:0;
        border: none;
        border-bottom: 3px solid #C83967;
    } 
    
    /* button{
        width: 350px;
        height: 46px;    
        background: #C83967;
        border-radius: 5px;
        border: none;             
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }

    button:hover{
        background: #EF9784;
    } */
`

export const Middle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #EEEEEE;
    padding: 2rem;

    h2 {
        margin-top: 1rem;
        margin: none;
    }

    select {
        margin: 0.5rem 0 1rem;
        outline: none;
        padding: 0.75rem;
        font-size: 1rem;
        border: none;
        border-bottom: 3px solid var(--primary);
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }

    input{
        display: flex;
        height: 58px;
        background: #FEFEFE;
        border-radius: 3px;
        margin-bottom: 13px;
        margin-top: 1rem;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding: 10px;
        outline:0;
        border: none;
        border-bottom: 3px solid #C83967;
    }
`

export const RightSide = styled.div`
    flex: 1;
    display: flex;
    gap: 1rem;
    height: 100%;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
    background-color: #ffffff;
    padding: 2rem;

    p.total {
        font-size: 1.5rem;
        margin-top: 2rem;
    }
    
    button{
        height: 46px;    
        background: #C83967;
        border-radius: 5px;
        border: none;             
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }

    button:hover{ 
        background: #EF9784;
    }
`

export const Product = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    border-color: #C83967;
    border-width: 3px;
    align-items: center;
    
    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`