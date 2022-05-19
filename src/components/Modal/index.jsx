import axios from "axios";
import React, {useEffect, useState, useContext} from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { 
    Container,
    Content,
    ProductImage,
    ProductInfos
} from "./styles";

import UserContext from "../../assets/context/userContext";
import { useNavigate } from "react-router-dom";

export function Modal({setActiveModal, modalData}) {
    const {token} = useContext(UserContext);

    const navigate = useNavigate()
    
    const Buy = async () => {
        // try{
        //     await axios({
        //         url:"http://localhost:5500/shoppingCart",
        //         method: "POST",
        //         data: modalData,
        //         headers: {
        //             Authorization: `Bearer ${token.token}`
        //         }
        //     });

        //     navigate("/shoppingCart");
        //     console.log('DEU');
        // } catch (error){
        //     console.log("NUM DEU",error);
        //     navigate("/sign-in")
        // }
    }
    
    return modalData ? (
        <Container>
            <FiX
                onClick={()=>{
                    setActiveModal(false);
                }}
            />

            <Content>
                <ProductImage image_url={modalData.imageURL}/>
                <ProductInfos>
                    <h2>{ modalData.name }</h2>
                    <p>{ modalData.description }</p>

                    <ul>
                        {
                            modalData.size.map((item, index)=>{
                                return (
                                    <span key={item+index}>
                                        <li>{item}</li>
                                    </span>
                                )
                            })
                        }
                    </ul>

                    {
                        modalData.stock <=10 
                        ? <p className="lastUnits">Ultimas {modalData.stock} unidades restantes!</p>
                        : <></>
                    }
                    
                    <h3>Por apenas R${modalData.price}</h3>

                    <button onClick={Buy}>Adcionar ao carrinho</button>

                    
                </ProductInfos>
            </Content>

        </Container>
    ) : <></>
}