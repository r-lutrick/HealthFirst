import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const View = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [servings, setServings] = useState('') 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/get/${id}`)
            .then(res => {
                setRecipe(res.data)
                setServings(res.data)
                // console.log("recipe: ", recipe)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id, loaded])

    return (
        <div className='p-3 shadow'>
            <img className='container p-0 shadow img-fluid mb-3' src={recipe.imglink} alt="sushi" />
            <div className='mt-5'>
                <h3>{recipe.name}</h3>
                {/* Author goes here */}
                {/* Author:
                <p>{recipe.user}</p> */}
            </div>
            <div className='d-flex p-0 col'>
                <p className='col-8'>{recipe.description}</p>
                {/* <ul className='list-unstyled col-3'> */}
                <div className='col-1'>

                </div>
                <ul className='list-inline col-3'>
                    <b>Features of this dish: </b>
                    {
                        loaded && recipe.tags.map((tag, i) => {
                            return (
                                <li className='list-inline-item'>
                                    {tag},
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='d-flex justify-content-between mt-5'>
                <h3>Ingredients</h3>
                {/* Serving size can increase/multiply the ingredients */}
                <p className='mr-4'>Servings: {recipe.servings}</p>
            </div>
            <ul className='list-group col-12 my-2'>
                {
                    loaded && recipe.ingredients.map((ing, i) => { return (<li className='list-group-item' key={i}>{ing}</li>) })
                }
            </ul>
            <div className='mt-5'>
                <h3>Instructions</h3>
                <ul className='list-group list-group-numbered col-12 my-2'>
                    {loaded && recipe.instructions.split('\n').map((newLine, i) => {
                        return (
                            <li className='list-group-item' key={i}>{newLine}</li>
                        )
                    })}
                </ul>
            </div>
            <div className='d-flex justify-content-end gap-2 mr-3'>
                <Link to={`/update/${id}`} className='btn btn-outline-info'>Update</Link>
                <DeleteButton recipeId={recipe._id} />
            </div>
        </div>
    )
}

export default View