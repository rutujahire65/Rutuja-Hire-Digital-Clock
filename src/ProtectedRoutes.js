import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Account from './Account';

const cookies = new Cookies();

function ProtectedRoutes({ children }) {
    // get cookie from the browser if user is loggedin
    const token = cookies.get('TOKEN')
    // const navigate = useNavigate()
    if (token) {
        return (
            <div>
                {children}
            </div>
        )
    } else {
        window.location.href = '/'
    }

    // return (
    //     <div>
    //         {Account}
    //     </div>
    // )
}

export default ProtectedRoutes