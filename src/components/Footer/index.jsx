import React from "react";

import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <div>
                <h1>Saia de Filó</h1>
                <div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/products"}>Produtos</Link>
                    </nav>
                </div>
            </div>

            <p>
                Feito por <a href="https://github.com/saulo775" target={"blank"}>Saulo Victor</a> and 
                <a href="https://github.com/RafaelCardoso990"target={"blank"}> Rafael Cardoso</a>
            </p>
        </Container>
    )
}