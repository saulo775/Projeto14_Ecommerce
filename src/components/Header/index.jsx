import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import { Container } from "./styles";

export function Header() {
    return (
        <Container>
                <h1>Saia de Filó</h1>
                <div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/products"}>Produtos</Link>
                    </nav>
                    <Link to={"shoppingcart"}><FiShoppingCart /></Link>
                    <Link to={"sign-up"}><FiUser /></Link>
                </div>
        </Container>
    )
}