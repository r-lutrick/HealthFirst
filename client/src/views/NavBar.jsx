import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CreateButton from '../components/CreateButton'
import HomeButton from '../components/HomeButton'

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)
    const logoutHandler = () => {
        axios.get(`http://localhost:8000/api/logout`, { withCredentials: true })
            .then(res => navigate("/"))
            .catch()
    }

    return (
        <header className='shadow '>
            <div className='d-flex align-items-center justify-content-between p-3 '>
                <h1 className='font-weight-light'>Health<i className='text-info font-weight-bold'>First</i></h1>
                <div>
                    {
                        location.pathname === '/' ?
                            <CreateButton/> : 
                            <HomeButton/>
                    }
                    <Link className='mx-2 btn btn-outline-info' to={'/login'}>Login/Register</Link>
                    <button onClick={logoutHandler} className='mx-2 btn btn-outline-info'>Logout</button>
                    <Link className='mx-2 btn btn-outline-info' to={'/myaccount'}>My Account</Link>

                </div>
            </div>
            <div>

            </div>
        </header>
    )
}

export default NavBar