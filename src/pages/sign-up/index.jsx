import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

import Google from '../../assets/images/google.png'
import Twitter from '../../assets/images/twitter.png'
import Facebook from '../../assets/images/facebook.png'

import { Main, RightSide, LeftSide, FormsSignUp, FormsSignIn } from "./style.js"

function SignUp() {
    const navigate = useNavigate();

    const [record, setRecord] = useState({
        name: '',
        email: '',
        password: '',
        checkPassword: '',
    })

    const SignUp = async () => {
        try {
            await axios.post(`https://saia-back.herokuapp.com/sign-up`, {
                name: record.name,
                email: record.email,
                password: record.password,
                checkPassword: record.checkPassword
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
                <FormsSignIn>
                    <div>
                        <h4>Faça o cadastro com:</h4>
                    </div>
                    <div>
                        <img src={Google} alt={"Logo Google"}/>
                        <img src={Twitter} alt={"Logo Twitter"}/>
                        <img src={Facebook} alt={"Logo Facebook"}/>
                    </div>
                </FormsSignIn>
            </LeftSide>
            <RightSide>
                <FormsSignUp>
                    <h1>Saia de Filó</h1>
                    <h2>Nome</h2>
                    <input type='text' placeholder="Digite o seu nome" name="name" value={record.name} onChange={handleFormChange}></input>
                    <h2>E-mail</h2>
                    <input type='text' placeholder="Digite o seu e-mail" name="email" value={record.email} onChange={handleFormChange}></input>
                    <h2>Senha</h2>
                    <input type='password' placeholder="Digite sua senha" name='password' value={record.password} onChange={handleFormChange}></input>
                    <h2>Senha</h2>
                    <input type='password' placeholder="Confirme a senha" name='checkPassword' value={record.checkPassword} onChange={handleFormChange}></input>
                    <button onClick={SignUp}>Cadastrar</button>
                    <Link to="/sign-in"><h3>Já tem uma conta? Entre agora!</h3></Link>
                </FormsSignUp>
            </RightSide>
        </Main>
    )
}

export default SignUp;