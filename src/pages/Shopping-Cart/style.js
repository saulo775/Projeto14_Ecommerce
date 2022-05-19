import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 4rem;
    background-color: var(--white);
    color: var(--primary);
    -webkit-box-shadow: 0px 1px 23px -6px #000000; 
    box-shadow: 0px 1px 23px -6px #000000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1;

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

export const Main = styled.main`
    
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 30px;
    margin-top: 40px;  
    margin-left: 45px; 
    margin-bottom: 40px;
  
    h2{
        align-self: flex-start;
        margin-left: 85px;     
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;       
        color: #C83967;
    }

    h3{
        align-self: flex-start;
        margin-top: 20px;   
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;       
        color: #C83967;
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 90vh;
    border-radius: 20px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button{
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
        width: 350px;
        height: 46px;    
        background: #EF9784;
        border-radius: 5px;
        border: none;             
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }

    input{
        width: 350px;
        height: 58px;
        background: #FEFEFE;
        border-radius: 3px;
        margin-bottom: 13px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding: 10px;
        border-top: none;
        border-left: none;
        border-right: none;
        outline:0;
        border-bottom-width: 3px;
        border-bottom-color: #C83967;
    }
`

export const LeftSide = styled.div`
    width: 140vw;
    height: 90vh;
    position: relative;
    background-color: #000000;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;  
    
`

export const FormsSignUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    width: 500px;
    height: 750px;         
    background-color: green;
    border-radius: 20px;
    border: none;
    
    h1{
        margin-bottom: 150px;
        font-family: 'Great Vibes', cursive;
        font-style: bold;
        font-weight: 400;
        font-size: 80px;
        line-height: 23px;
        color: #C83967;
    }


`

export const ListProduct = styled.div`
    width: 1200px;
    height: 750px;         
    background-color: #fefefe;
    border-radius: 20px;    
    display: flex;
    justify-content: space-evenly;
    align-items: space-evenly;
    flex-direction: column;
    overflow: auto;
   
    

    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
      
    }

    img{
        width: 50px;
        height: 50px;
        margin: 0 20px 0 20px;
    }

    h4{      
        margin-bottom: 45px;       
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;       
        color: #C83967;    
    }
`
export const Cart = styled.div`
    
    background-color: #EDEDED;
    z-index: 1;
    margin-top: 30px;
   

   img{
      
       width: 175px;
       height: 150px;
      
   }

`
