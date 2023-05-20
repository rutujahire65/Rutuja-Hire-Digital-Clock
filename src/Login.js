import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const Login = () => {
    //status

    const [email, setEmail,] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        //set configurations
        console.log({ email, password })

        const configuration = {
            method: "post",
            url: "http://localhost:3000/login",
            data: {
                email,
                password
            }

        }

        //make the api call
        axios(configuration)
            .then((result) => {

                console.log('result', result)
                //set the cookies
                cookies.set('TOKEN', result.data.token, { path: '/' })
                window.location.href = '/auth';
                setLogin(true)

            }).catch((error) => {
                error = new Error()
            })
    }
    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={(e) => handleSubmit(e)} >
                {/* email */}
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' name='email' value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Email' />
                </Form.Group>
                {/* password */}
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter Password' />
                </Form.Group>

                <Button variant='primary' type='submit'>Login</Button>

                {/* display a success or error message */}

                {login ? (
                    <p className='text-success'>You are Logged in successfully</p>
                ) : (
                    <p className='text-danger'>You are not logged in</p>
                )}

            </Form>
        </div>
    )
}



export default Login