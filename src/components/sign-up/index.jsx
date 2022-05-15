import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

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
            await axios.post('http://localhost:5000/sign-up', {
                name: record.name,
                email: record.email,
                password: record.password,
                checkPassword: record.checkPassword
            })
            alert("cadastro feito com sucesso!")
            navigate('/sign-in')
        } catch (e) {
            console.log("error", e)
            alert(`Ops, ocorreu um erro!`, e)
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
                        <img src={Google} />
                        <img src={Twitter} />
                        <img src={Facebook} />
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