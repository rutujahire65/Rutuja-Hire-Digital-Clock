import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

const token = cookies.get('TOKEN')

function AuthComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const configuration = {
      method: 'get',
      url: 'http://localhost:3000/auth-endpoint',
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
    axios(configuration)
      .then((result) => {
        setMessage(result.data.message)
      })
      .catch((error) => {
        error = new Error();
      })
  }, [])

     const logout =()=>{
        //destroy the cookie

        cookies.remove('TOKEN',{path:'/'})
        //redirect the user to the landing page

        window.location.href = '/'
     } 

  return (
    <div className='text-center'>
      <h1>Auth Component</h1>
       <h3 className='text-danger'>{message}</h3>
       <Button type='submit' variant='danger' onClick={()=> logout()}>Logout</Button>
    </div>
  )
}

export default AuthComponent