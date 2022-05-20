import { useContext, useState } from 'react'
import axios from 'axios';
import InputMask from 'react-input-mask'
import Swal from 'sweetalert2';

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Container, Main, RightSide, LeftSide, Middle,  Product } from "./style.js"
import UserContext from '../../assets/context/userContext.js';


function Checkout() {
    const { cartData, token } = useContext(UserContext);

    const card = [
        { name: 'Cartão de crédito', type: 'credit' },
        { name: 'Cartão de débito', type: 'debit' }
    ];

    const [record, setRecord] = useState({
        name: '',
        lastName: '',
        cpf: '',
        country: '',
        telephone: '',
        addres: '',
        cep: '',
        card: '',
        cvv: '',
        typeCard: "credit"
    })

    console.log(record)

    const confirm = async () => {
        try {
            await axios.post("https://saia-de-filo.herokuapp.com/checkout", {
                name: record.name,
                lastName: record.lastName,
                cpf: record.cpf,
                country: record.country,
                telephone: record.telephone,
                addres: record.addres,
                cep: record.cep,
                card: record.card,
                cvv: record.cvv,
                typeCard: record.typeCard,
                userId: token.userId,
                cartData
            }, { headers: { Authorization: `Bearer ${token.token}` } })

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Agora é so aguardar a entrega !',
                showConfirmButton: false,
                timer: 1500
            })

            try {
                await axios.delete(`https://saia-de-filo.herokuapp.com/cart/${token.userId}`, {
                    headers: { Authorization: `Bearer ${token.token}` }
                })
                console.log("deletou")
            } catch (e) {
                console.log("nao deletou", e)
            }
        } catch (e) {
            console.log("error", e)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${e.response.data}`,
                showConfirmButton: false,
                timer: 3000
            })
        }
    }

    const handleFormChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value })
    }

    let total = 0
    cartData.forEach((item) => {
        total += item.price;
    });

    return (
        <Container>
            <Header />
            <Main>
                <LeftSide>
                    <h1>Confirme seus dados pessoais e endereço:</h1>
                    <h2>Nome</h2>
                    <input type='text' placeholder="Digite o seu nome" name="name" value={record.name} onChange={handleFormChange}></input>
                    <h2>Sobrenome</h2>
                    <input type='text' placeholder="Digite o seu sobrenome" name="lastName" value={record.lastName} onChange={handleFormChange}></input>
                    <h2>CPF</h2>
                    <InputMask type='text' placeholder="Digite o seu cpf" name='cpf' mask="999.999.999-99" value={record.cpf} onChange={handleFormChange}></InputMask>
                    <h2>País</h2>
                    <input type='text' placeholder="Digite o seu País" name="country" value={record.country} onChange={handleFormChange}></input>
                    <h2>Número celular</h2>
                    <InputMask type='text' placeholder="Digite seu número de telefone" name='telephone' mask="(99) 99999-9999" value={record.telephone} onChange={handleFormChange}></InputMask>
                    <h2>Endereço de entrega</h2>
                    <input type='text' placeholder="Digite o endereço de entrega" name="addres" value={record.addres} onChange={handleFormChange}></input>
                    <h2>CEP</h2>
                    <InputMask type='text' placeholder="Digite o seu cep" name="cep" mask="99999-999" value={record.cep} onChange={handleFormChange}></InputMask>
                </LeftSide>
                <Middle>
                    <h1>Confirme seu metodo de pagamento:</h1>

                    <select name="typeCard" value={record.typeCard} onChange={handleFormChange}>
                        {card.map((item) => (
                            <option value={item.type}>{item.name}</option>
                        ))}
                    </select>
                    <h2>Número do cartão</h2>
                    <InputMask type='text' placeholder="Digite o número do cartão" name="card" mask="9999-9999-9999-9999" value={record.card} onChange={handleFormChange}></InputMask>
                    <h2>CVV</h2>
                    <InputMask type='text' placeholder="Digite o CVV" name="cvv" mask="999" value={record.cvv} onChange={handleFormChange}></InputMask>

                </Middle>
                <RightSide>
                    {cartData.map(item => {
                        const { name, price, _id, imageURL } = item
                        return (
                            <Product key={_id}>
                                <div>
                                    <img src={imageURL} alt="" />
                                    <p>{name}</p>
                                </div>
                                <p>{price}</p>
                            </Product>
                        )
                    })}
                    <p className='total'>Total : R$ {total.toFixed(2)}</p>
                    <button onClick={confirm}>Finalizar compra</button>
                </RightSide>
            </Main>
            <Footer />
        </Container>
    )
}

export default Checkout;