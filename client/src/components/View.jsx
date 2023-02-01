import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const View = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/get/${id}`)
            .then(res => {
                setRecipe(res.data)
                console.log(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id, loaded])

    return (
        <div className='px-3'>
            <h3>{recipe.name}</h3>
            {/* Author goes here */}
            <div>
                <p>{recipe.description} </p>
                <ul>
                    {
                        loaded && recipe.tags.map((t, i) => { return (<li key={i}>{t}</li>) })
                    }
                </ul>
            </div>
            <div>
                <h3>Ingredients</h3>
                {/* Serving size can increase/multiply the ingredients */}
                {/* <p>Serving: <input type="number" /></p> */}
            </div>
            <ul>
                {
                    loaded && recipe.ingredients.map((ing, i) => { return (<li key={i}>{ing}</li>) })
                }
            </ul>
            <div className='d-flex gap-2'>
            <Link to={`/update/${id}`} className='btn btn-outline-info'>Update</Link>
            <DeleteButton recipeId={recipe._id}/>
            </div>
        </div>
    )
}

export default View