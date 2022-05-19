import React from "react";
import axios from "axios";
import { useContext } from "react";

import { FiShoppingCart, FiUser } from "react-icons/fi";

import { Featured } from "../../components/Featured";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {Main, RightSide, LeftSide, FormsSignUp, ListProduct, Container, Cart} from "./style"

import UserContext from "../../assets/context/userContext";

export function ShoppingCart(){
    const {token} = useContext(UserContext)
    console.log(token.token)

    const [featuredProducts, setFeaturedProducts] = React.useState([]);
    console.log(featuredProducts)
    React.useEffect(() => {
        const promise = axios({
            method: "GET",
            url: "http://localhost:5500/shoppingCart",
        });

        promise.then((response) => {
            setFeaturedProducts(response.data);
        });

        promise.catch((e) => {
            console.log(e);
        });
    }, []);  

    return (
        <Container>         
            <Header/>
            <Main>
                <LeftSide>
                    <ListProduct>
                        {featuredProducts.map(featured => {
                            const {name, price, image_url} = featured
                            return (
                                <Cart>
                                    <img src={image_url}/>
                                    <p>{name}</p>
                                    <p>R$ {price}</p>                                  
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
