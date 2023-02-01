import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/get/${id}`)
            .then(res => {setRecipe(res.data)})
            .catch(err => console.log(err))
    }, [id])
    console.log(recipe)
    return (
        <div>
            <h3>{recipe.name}</h3>
            {/* Author goes here */}
            <div>
                <p>{recipe.description}</p>
                <ul>
                    {/* {recipe.tags.map((t, i) => {
                        return (
                            <li key={i}>{t}</li>
                        )
                    })} */}
                    <p>{recipe.tags}</p>
                </ul>
            </div>
            <h3>Ingredients</h3>
            <ul>
                {/* <p>{recipe.ingredients}</p> */}
                {/* {
                    recipe.ingredients.map((ing, i) => {
                        return (
                            <li key={i}>{ing}</li>
                        )
                    })
                } */}
            </ul>

        </div>
    )
}

export default View