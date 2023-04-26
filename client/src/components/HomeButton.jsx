import React from 'react'
import { Link } from 'react-router-dom'

const HomeButton = () => {
    return (
        <>
            <Link className='btn btn-info' to={'/'}>Home</Link>
        </>
    )
}

export default HomeButton