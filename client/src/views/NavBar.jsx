import React from 'react'

const NavBar = () => {
    return (
        <div className='border d-flex align-items-center justify-content-between p-3'>
            <h1>Health First Recipes</h1>
            <div>
                <a href="#" className='p-3'>Home</a>
                <a href="#" className='p-3'>Login</a>
            </div>
        </div>
    )
}

export default NavBar