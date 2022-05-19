import React from "react";
import axios from "axios";
import { useContext } from "react";
import {useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {Main, RightSide, LeftSide, Container, Cart} from "./style"

import UserContext from "../../assets/context/userContext";
import CartContext from "../../assets/context/cartContext";

export function ShoppingCart(){
    const {token}  = useContext(UserContext);
    const [cartData, setCartData] = React.useState({});
    const [cartProducts, setCartProducts] = React.useState([]);

    const navigate = useNavigate();

    React.useEffect(() => {
        const promise = axios({
            method: "GET",
            url: "http://localhost:5500/shoppingCart",
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        });

        promise.then((response) => {
            setCartProducts(response.data);
        });

        promise.catch((e) => {
            console.log(e);
        });
    }, []);  

    let total = 0;
    cartProducts.map((item)=> {
        total = total + item.price;
    });


    async function handleSendBuyToCheckout() {

        if (!cartProducts) {
            alert("Carrinho vazio!");
            return;
        }
        setCartData({
            total,
            cartProducts
        });

        navigate("/checkout");
        return;
    }

    return (
        <CartContext.Provider value={{cartData, setCartData}}>

            <Container>         
                <Header/>
                <Main>
                    <LeftSide>
                            {cartProducts.map(featured => {
                                const {name, price, imageURL} = featured

                                console.log(imageURL)
                                return (
                                    <Cart>
                                        <div>
                                            <img src={imageURL} alt={`imagem ${name}`}/>
                                            <p>{name}</p>
                                        </div>
                                        <p>R$ {price}</p>                                  
                                    </Cart>                               
                                )
                            })}
                    </LeftSide>
                    <RightSide>
                        <div>
                            <h2>TOTAL</h2>
                            <h3>{total}</h3>
                        </div>
                        <button onClick={handleSendBuyToCheckout}>
                            Finalizar Pedido
                        </button>
                    </RightSide>
                </Main>

                <Footer />
            </Container>
        </CartContext.Provider>
    );
}
