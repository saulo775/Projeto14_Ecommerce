import React from "react";
import axios from "axios";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductCard } from "../../components/ProductCard";

import {
    Container,
    AllProducts,
} from "./styles";

export function Products() {
    const [ allProducts, setAllProducts ] = React.useState([]);

    React.useEffect(() => {
        const promise = axios({
            method: "GET",
            url: "http://localhost:5500/products",
        });

        promise.then(({data}) => {
            setAllProducts(data);
        });
        promise.catch((e)=>{
            console.log(e)
        })
    }, []);

    return (
        <Container>
            <Header />

            <AllProducts>
                {
                    allProducts.map((item)=>{
                        return(
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                imageURL={item.image_url}
                                description={item.description}
                                size={item.size}
                                stock={item.stock}
                                category={item.category}
                                sales={item.sales}
                            />
                        )
                    })
                }
            </AllProducts>
            <Footer />
        </Container>
    );
}