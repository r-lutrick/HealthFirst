import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const DeleteButton = (props) => {
    const navigate=useNavigate()
    const {recipeId} = props;

    const deleteRecipe = e => {
        axios.delete('http://localhost:8000/api/recipe/delete/' + recipeId)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <button className='btn btn-outline-danger' onClick={deleteRecipe}>Delete</button>
        </div>
    )
}
//github test

export default DeleteButton