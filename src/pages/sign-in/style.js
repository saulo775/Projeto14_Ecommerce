import styled from 'styled-components';
import fundo from "../../assets/images/pexeks.jpg";

export const Main = styled.main`
    
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 30px;
    margin-top: 40px;  
    margin-left: 45px; 
  
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
    width: 90vw;
    height: 90vh;
    border-radius: 20px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    -webkit-box-shadow: -13px 3px 18px -9px rgba(0,0,0,0.59); 
    box-shadow: -13px 3px 18px -9px rgba(0,0,0,0.59);

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
    width: 90vw;
    height: 90vh;
    position: relative;
    background-image: url(${fundo});
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    
    img{
        width: 120%;
        height: 100%;             
        border-top-left-radius:20px;
        border-bottom-left-radius:20px;        
    }

`
export const FormsSignUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    width: 500px;
    height: 750px;         
    background-color: #fefefe;
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
export const FormsSignIn = styled.div`
    width: 500px;
    height: 750px;         
    background-color: #fefefe;
    border-radius: 20px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

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
