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
    console.log(token)

    const [featuredProducts, setFeaturedProducts] = React.useState([]);

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
            {/* <Header>
                <h1>Saia de Filó</h1>
                <div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"products"}>Produtos</Link>
                    </nav>
                    <Link to="/shoppingCart"><FiShoppingCart /></Link>
                    <Link to="/sign-up"><FiUser /></Link>
                </div>
            </Header> */}
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
