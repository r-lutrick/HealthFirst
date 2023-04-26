import React from 'react'
import { Link } from 'react-router-dom'

const CreateButton = () => {
    return (
        <>
            <Link className='btn btn-info' to={'/create'}>New Recipe</Link>
        </>
    )
}

export default CreateButton