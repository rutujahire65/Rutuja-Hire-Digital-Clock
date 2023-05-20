
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'


function Register() {

    //status

    const [email, setEmail,] = useState('')
    const [password, setPassword] = useState('')
    const [Register, setRegister] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        //set configurations
        console.log({email, password})
        const configuration = {
            method:'post',
            url:'http://localhost:3000/register',
            data:{
                email,
                password
            }
        }
        //make the api call
        axios(configuration)
        .then((result)=>{
            setRegister(true)
            console.log(result)
        }).catch((error)=>{
            error = new Error()
        })
    }
    return (
        <div>
            <h2>Register</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* email */}
                <Form.Group>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control type='email' name='email' value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Email' />
                </Form.Group>
                {/* password */}
                <Form.Group>
                    <Form.Label>
                        password
                    </Form.Label>
                    <Form.Control type='password' name='password' value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your Password' />
                </Form.Group>
                <Button variant='primary' type='subtmit'>Register</Button>

                {/* display a success or error message */}
                {Register ? (
                    <p className='text-success'>You are registered successful</p>
                ) : (
                    <p className='text-danger'>You are not registered</p>
                )}
            </Form>
        </div>
    )
}

export default Register