import React from "react";
import axios from "axios";
import { useContext, useState } from "react";

import { BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs";

import { Featured } from "../../components/Featured";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {Main, RightSide, LeftSide, FormsSignUp, ListProduct, Container, Cart} from "./style"

import UserContext from "../../assets/context/userContext";

export function ShoppingCart(){
    const {token} = useContext(UserContext)
    console.log(token.token)

    const [featuredProducts, setFeaturedProducts] = useState([]);

    let [quantity, setQuantity] = useState(1)

    console.log(featuredProducts)
    
    React.useEffect(() => {
        const promise = axios({
            method: "GET",
            url: "http://localhost:5000/shoppingCart",
            headers: {Authorization: `Bearer ${token.token}`} 
        });

        promise.then((response) => {
            setFeaturedProducts(response.data);
        });

        promise.catch((e) => {
            console.log(e);
        });
    }, []);  

    function plus(){
        setQuantity(quantity++)
    }

    function minus(){
        setQuantity(quantity--)
    }

    return (
        <Container>         
            <Header/>
            <Main>
                <LeftSide>
                    <ListProduct>
                        {featuredProducts.map(featured => {
                            const {name, price, imageURL} = featured
                            return (
                                <Cart>
                                    <img src={imageURL}/>
                                    <p>{name}</p>
                                    <p>R$ {price}</p>
                                    <div className="quantity"><BsFillDashCircleFill onClick={minus}/><p>{quantity}</p><BsPlusCircleFill onClick={plus}/></div>                                                                     
                                </Cart>                               
                            )
                        })}
                    </ListProduct>
                </LeftSide>
                <RightSide>
                    <FormsSignUp>
                        
                    </FormsSignUp>
                </RightSide>
            </Main>

            <Footer />
        </Container>
    );
}
