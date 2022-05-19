import React from "react";

import { Container, ImageDestack, BuyButton } from "./style";

export function Featured({id, name, price, image_url}) {
    function sendProductToCart() {
        console.log("Cliquei");
    }

    return (
        <Container id={id}>
            <ImageDestack imageURL={image_url}/>
            <div>
                <h3>{name}</h3>
                <h4>R$ {price}</h4>
            </div>
            <BuyButton
                onClick={sendProductToCart}
            >Comprar</BuyButton>
        </Container>
    )
}