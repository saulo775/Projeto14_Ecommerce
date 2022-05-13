import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import { Featured } from "../../components/Featured";
import { Footer } from "../../components/Footer";

import {
    Container,
    Header,
    Banner,
    Title,
    Highlights,
} from "./styles";

export function Home() {
    const [featuredProducts, setFeaturedProducts] = React.useState([]);

    React.useEffect(()=>{
        const promise = axios({
            method: "GET",
            url: "http://localhost:5500/featured-products",
        });

        promise.then((response)=>{
            setFeaturedProducts(response.data);
        });

        promise.catch((e)=>{
            console.log(e);
        });
    }, []);


    const featured = featuredProducts.map((item)=>{
        return (
            <Featured 
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image_url={item.image_url}
            />
        );
    });

    return (
        <Container>
            <Header>
                <h1>Saia de Filó</h1>
                <div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"products"}>Produtos</Link>
                    </nav>
                    <FiShoppingCart />
                    <FiUser />
                </div>
            </Header>

            <Banner>
                <div>
                    <h1>As melhores vestimentas para as mais garbosas donzelas!</h1>
                    <Link to={"/products"}>
                        <span>Ver Tudo</span>
                    </Link>
                </div>
            </Banner>

            <Title>
                <h2>Nossos Destaques</h2>
            </Title>


            <Highlights>
                {featured}
            </Highlights>

            <Footer/>
        </Container>
    );
}