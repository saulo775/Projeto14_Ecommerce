import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Featured } from "../../components/Featured";

//import UserContext from "../../assets/context/userContext";

import {
    Container,
    Banner,
    Title,
    Highlights,
} from "./styles";
//import CartContext from "../../assets/context/cartContext";


export function Home() {        
    
    const [featuredProducts, setFeaturedProducts] = React.useState([]);
    //console.log(featuredProducts)

    const navigate = useNavigate();


    React.useEffect(()=>{
        const promise = axios({
            method: "GET",
            url: `https://saia-de-filo.herokuapp.com/featured-products`,
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Credentials": true,
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
            }
        });

        promise.then((response)=>{
            setFeaturedProducts(response.data);
        });

        promise.catch((e)=>{
            console.log(e);
        });
    }, []);


    let featured = 0
    if (featuredProducts) {
        
        featured = featuredProducts.map((item)=>{
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
    }

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

            <button onClick={()=>{
                navigate("/products")
            }}>Ver todos os produtos</button>
            <Footer/>
        </Container>
    );
}