import React from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { 
    Container,
    Content,
    ProductImage,
    ProductInfos
} from "./styles";

export function Modal({setActiveModal, modalData}) {
    
    
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

                    <button>
                        Adcionar ao carrinho
                    </button>

                    
                </ProductInfos>
            </Content>

        </Container>
    ) : <h1>Carregando</h1>
}