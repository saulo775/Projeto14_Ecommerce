import React, {useContext} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Featured } from "../../components/Featured";


import UserContext from "../../assets/context/userContext";

import {
    Container,
    Banner,
    Title,
    Highlights,
} from "./styles";

export function Home() {
    const {token} = useContext(UserContext)
    console.log(token)
    
    const [featuredProducts, setFeaturedProducts] = React.useState([]);

    React.useEffect(()=>{
        const promise = axios({
            method: "GET",
            url: "http://localhost:5000/featured-products",
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
            <Header/>            
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