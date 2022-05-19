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

export function Modal({setActiveModal, modalData}) {
    const {token} = useContext(UserContext)
    console.log(token)
    
    const Buy = async () => {
        try{
            await axios.post("http://localhost:5000/shoppingCart",{
                data: modalData
            })
            console.log('DEU')
        } catch (error){
            console.log(error)
        }
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