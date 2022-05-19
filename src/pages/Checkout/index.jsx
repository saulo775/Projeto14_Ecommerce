import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import Swal from 'sweetalert2';


import { Main, RightSide, LeftSide, FormsSignUp, Middle, CheckoutCart, Cart } from "./style.js"



function Checkout() {
    const navigate = useNavigate();

    const [record, setRecord] = useState({
        name: '',
        lastName: '',
        cpf: '',
        country: '',
        telephone: '',
        addres: '',
        cep: ''
    })
    console.log(record)
     const confirm = async () => {
         try {
             await axios.post(`http://localhost:5000/checkout`, {
                 name: record.name,
                 lastName: record.lastName,
                 cpf: record.cpf,
                 country: record.country,
                 telephone: record.telephone,
                 addres: record.addres,
                 cep: record.cep
             })
             Swal.fire({
                 position: 'center',
                 icon: 'success',
                 title: 'Cadastro feito com sucesso',
                 showConfirmButton: false,
                 timer: 1500
             })
             navigate('/sign-in')
         } catch (e) {
             console.log("error", e.response.data)
             Swal.fire({
                 position: 'center',
                 icon: 'error',
                 title: `${e.response.data}`,
                 showConfirmButton: false,
                 timer: 1500
             })
         }
     }

    const handleFormChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value })
    }

    return (
        <Main>
            <LeftSide>
                <FormsSignUp>
                    <CheckoutCart>
                            <h1>Confirme seus dados pessoais e endereço:</h1>
                            <h2>Nome</h2>
                            <input type='text' placeholder="Digite o seu nome" name="name" value={record.name} onChange={handleFormChange}></input>
                            <h2>Sobrenome</h2>
                            <input type='text' placeholder="Digite o seu sobrenome" name="lastName" value={record.lastName} onChange={handleFormChange}></input>
                            <h2>CPF</h2>
                            <InputMask type='text' placeholder="Digite o seu cpf" name='cpf' mask ="999.999.999-99" value={record.cpf} onChange={handleFormChange}></InputMask>  
                            <h2>País</h2>
                            <input type='text' placeholder="Digite o seu País" name="country" value={record.country} onChange={handleFormChange}></input>
                            <h2>Número celular</h2>
                            <InputMask type='text' placeholder="Digite seu número de telefone" name='telephone' mask="(99) 99999-9999" value={record.telephone} onChange={handleFormChange}></InputMask>                        
                            <h2>Endereço de entrega</h2>
                            <input type='text' placeholder="Digite o endereço de entrega" name="addres" value={record.addres} onChange={handleFormChange}></input>
                            <h2>CEP</h2>
                            <InputMask type='text' placeholder="Digite o seu cep" name="cep" mask="99999-999" value={record.cep} onChange={handleFormChange}></InputMask>
                    </CheckoutCart>
                </FormsSignUp>
            </LeftSide>
            <Middle>
                <Cart>
                    <h1>Confirme seu metodo de pagamento:</h1>
                    <select name="select">
                        <option value="valor1">Cartão de crédito</option>
                        <option value="valor2" selected>Cartão de débito</option>
                        <option value="valor3">PayPal</option>
                    </select>
                    <button></button>
                </Cart>
                </Middle>
            <RightSide>
                <FormsSignUp>
                    <p>{record.name}</p>
                    <p>{record.addres}</p>
                    <p>{record.cpf}</p>
                    
                    <p>Total : R$ 100000</p>
                    <button onClick={confirm}>Finalizar compra</button>
                </FormsSignUp>
            </RightSide>
        </Main>
    )
}

export default Checkout;