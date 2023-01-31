import React from 'react'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className='border d-flex align-items-center justify-content-between p-3'>
            <h1>Health First Recipes</h1>
            <div>
                {
                    location.pathname === '/' ? 
                        <a href="#" className='p-3'>Create</a> :
                        <a href="#" className='p-3'>Home</a>
                }
                <a href="#" className='p-3'>Login</a>
            </div>
        </div>
    )
}

export default NavBar