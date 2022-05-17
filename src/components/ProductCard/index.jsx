import React from "react";

import { Container, ImageContent } from "./styles";

export function ProductCard(props) {
    return (
        <Container>
            <ImageContent imageURL={props.imageURL}/>
            <h3>{props.name}</h3>
            <h4>R$ {props.price}</h4>
        </Container>
    );
}