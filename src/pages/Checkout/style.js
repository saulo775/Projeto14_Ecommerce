import styled from 'styled-components';


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
        margin-bottom: 10px;
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
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
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
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 90vh;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
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
        padding: 10px;
        border-top: none;
        border-left: none;
        border-right: none;
        outline:0;
        border-bottom-width: 3px;
        border-bottom-color: #C83967;
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
export const Middle = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 90vh;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #EEEEEE;
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
export const CheckoutCart = styled.div`
    width: 500px;
    height: 750px;         
    background-color: #fefefe;
    border-radius: 20px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   

    h1{
        color: black;
        font-size: 20px;
        font-family: 'Popins', sans-serif;
        line-height: 23px;
        margin: 0 0px 30px 30px;
    }

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
    width: 500px;
    height: 750px;         
    background-color: #EEEEEE;
    border-radius: 20px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    select{
        width: 350px;
        height: 46px;    
        background: #C83967;
        border-radius: 5px;
        border: none;            
        margin-bottom: 30px; 
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
    
    input{
        width: 350px;
        height: 58px;
        background: #EEEEEE;
        border-radius: 3px;
        margin-bottom: 30px;
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

    h1{
        color: black;
        font-size: 20px;
        font-family: 'Popins', sans-serif;
        line-height: 23px;
        margin: 0 0px 30px 0px;
    }

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
export const Product = styled.div`
    display: flex;
    border-color: #C83967;
    border-width: 3px;
    padding:30px;
    
    p{

    }
`