import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    // Get recipe
    const [recipe, setRecipe] = useState([])
    // Variable/Hooks here
    const [name, setName] = useState(recipe.name)
    const [description, setDescription] = useState(recipe.description)
    const [instructions, setInstructions] = useState(recipe.instructions)
    const [ingredient, setIngredient] = useState(recipe.ingredient)
    const [tag, setTag] = useState(recipe.tag)
    // Arrays
    const [ingredients, setIngredients] = useState([])
    const [tags, setTags] = useState([])

    const [loaded, setLoaded] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/get/${id}`)
            .then(res => {
                setRecipe(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(`Update error: ${err}`))
    })
//test comment for Github test
    const handleSubmit = () => {

    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.put(`http://`)
    }

    return (
        <div>
            <h3>Update Recipe</h3>
            <form className='d-flex form-group'>
                <div className='col-4 px-0 mr-2'>
                    {/* NAME */}
                    <div className='my-2'>
                        <label htmlFor="name"><b>Name</b></label>
                        <input className='form-control' placeholder={recipe.name}
                            type="text" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    {/* DESCRIPTION */}
                    <div className='my-2'>
                        <label htmlFor="description"><b>Description</b></label>
                        <textarea className='form-control' placeholder={recipe.description}
                            type="text" onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    {/* INSTRUCTIONS */}
                    <div className='my-2'>
                        <label htmlFor="instructions"><b>Instructions</b></label>
                        <textarea className='form-control' placeholder={recipe.instructions}
                            type="text" onChange={(e) => { setInstructions(e.target.value) }} />
                    </div>
                    <button onClick={handleSubmit} className='btn btn-outline-info my-2'>Update Recipe</button>
                </div>
                {/* INGREDIENT COLUMN */}
                <div className='col-4 px-0 mr-2'>
                    <b>Ingredients</b>
                    <div className='d-flex'>
                        <input type="text" className='form-control' />
                        <button className='btn btn-outline-info'>Add</button>
                    </div>
                    {
                        loaded && recipe.ingredients.map((ing, i) => {
                            return (
                                <div key={i} className='d-flex my-2'>
                                    <input className='form-control' placeholder={ing}
                                        type="text" onChange={(e) => { setIngredient(e.target.value) }} />
                                    <button className='btn btn-sm btn-outline-danger' onClick={() => handleDelete(i)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
                {/* TAG COLUMN */}
                <div className='col-4 px-0'>
                    <b>Tags</b>
                    <div className='d-flex'>
                        <input type="text" className='form-control' />
                        <button className='btn btn-outline-info'>Add</button>
                    </div>
                    {
                        loaded && recipe.tags.map((tag, i) => {
                            return (
                                <div key={i} className='d-flex my-2'>
                                    <input className='form-control' placeholder={tag}
                                        type="text" onChange={(e) => { setTag(e.target.value) }} />
                                    <button className='btn btn-sm btn-outline-danger' onClick={() => handleDelete(i)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </form>
        </div>
    )
}

export default Update