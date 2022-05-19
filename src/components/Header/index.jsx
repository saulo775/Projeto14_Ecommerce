import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import { Container } from "./styles";
import UserContext from "../../assets/context/userContext";

export function Header() {
    const {token} = React.useContext(UserContext);
    return (
        <Container>
                <h1>Saia de Filó</h1>
                <div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/products"}>Produtos</Link>
                    </nav>
                    {
                        token 
                        ? <Link to={"/shoppingcart"}><FiShoppingCart /></Link>
                        : <></>
                    }
                    <Link to={"/sign-in"}><FiUser /></Link>
                </div>
        </Container>
    )
}