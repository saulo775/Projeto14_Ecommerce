import React from "react";

import { Container, ImageContent } from "./styles";

export function ProductCard({setActiveModal, setModalData,...rest}) {
    return (
        <Container
            onClick={()=>{
                setActiveModal(true);
                setModalData(rest)
            }}
        >
            <ImageContent imageURL={rest.imageURL}/>
            <h3>{rest.name}</h3>
            <h4>R$ {rest.price}</h4>
        </Container>
    );
}