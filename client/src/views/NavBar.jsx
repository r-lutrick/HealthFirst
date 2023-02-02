import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const location = useLocation()
    // console.log(location)
    return (
        <header className='shadow '>
            <div className='d-flex align-items-center justify-content-between p-3 '>
                <h1 className='font-weight-light'>Health<i className='text-info font-weight-bold'>First</i></h1>
                <div>
                    {
                        location.pathname === '/' ?
                            <Link className='btn btn-info' to={'/create'}>New Recipe</Link> :
                            <Link className='btn btn-info' to={'/'}>Home</Link>
                    }
                    <Link className='mx-2 btn btn-outline-info' to={'#'}>Login</Link>
                </div>
            </div>
            <div>

            </div>
        </header>
    )
}

export default NavBar