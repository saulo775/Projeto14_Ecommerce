import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

import Google from '../../assets/images/google.png'
import Twitter from '../../assets/images/twitter.png'
import Facebook from '../../assets/images/facebook.png'

import { Main, RightSide, LeftSide, FormsSignUp, FormsSignIn } from "./style.js"

function SignIn() {
    const navigate = useNavigate();

    const [record, setRecord] = useState({
        name: '',
        email: '',
        password: '',
        checkPassword: '',
    })

    const SignIn = async () => {
        try {
            await axios.post('http://localhost:5000/sign-in', {
                email: record.email,
                password: record.password,                
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login feito com sucesso!',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')
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
                    <h4>Faça o login com:</h4> 
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
                    <h2>E-mail</h2>                      
                    <input type='text' placeholder="Digite o seu e-mail" name="email" value={record.email} onChange={handleFormChange}></input>
                    <h2>Senha</h2>  
                    <input type='password' placeholder="Digite a sua senha" name='password' value={record.password} onChange={handleFormChange}></input>        
                     <button onClick={SignIn}>Login</button>
                    <Link to="/sign-up"><h3>Primeira vez? Cadastre-se!</h3></Link>
                </FormsSignUp>
            </RightSide>
        </Main>
    )
}

export default SignIn;