import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const location = useLocation()
    // console.log(location)
    return (
        <div className='d-flex bg-success bg-opacity-25 align-items-center justify-content-between p-3 '>
            <h1>Health First Recipes</h1>
            <div>
                {
                    location.pathname === '/' ? 
                        <Link className='btn btn-outline-primary' to={'/create'}>New Recipe</Link> :
                        <Link className='btn btn-outline-primary' to={'/'}>Home</Link>
                }
                <Link className='mx-2 btn btn-primary' to={'#'}>Login</Link>
            </div>
        </div>
    )
}

export default NavBar