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
    // Arrays
    const [ingredient, setIngredient] = useState(recipe.ingredient)
    const [ingredients, setIngredients] = useState([])
    const [tag, setTag] = useState(recipe.tag)
    const [tags, setTags] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/get/${id}`)
        .then(res => setRecipe(res.data))
        .catch(err => console.log(`Update error: ${err}`))
    })

    const handleSubmit = () => {

    }

    return (
        <div>
            <h3>Update Recipe</h3>
            <form onSubmit={handleSubmit} className='d-flex'>
                <div className='container'>
                    <div>
                        <input className='form-control' placeholder={recipe.name}
                            type="text" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <input className='form-control' placeholder={recipe.description}
                            type="text" onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    <div className='d-flex'>
                        {
                            recipe.ingredient.map((ing, i) => {
                                <input type="text" />
                            })
                        }
                        <input className='form-control' placeholder={recipe.ingredient}
                            type="text" onChange={(e) => { setIngredient(e.target.value) }} />
                        {/* <button className='btn btn-outline-dark' onClick={addIngredient}>+</button> */}
                    </div>
                    <div className='d-flex'>
                        <input className='form-control' placeholder={recipe.tag}
                            type="text" onChange={(e) => { setTag(e.target.value) }} />
                        {/* <button className='btn btn-outline-dark' onClick={addTag}>+</button> */}
                    </div>
                    <div className='d-flex col my-3'>
                        <div className='col-6'>
                            <b>Ingredients</b>
                            <hr />
                            {ingredients.map((ing, i) => { return (<p key={i}>{ing}</p>) })}
                        </div>
                        <div className='col-6'>
                            <b>Tags</b>
                            <hr />
                            {tags.map((t, i) => { return (<p key={i}>{t}</p>) })}
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <textarea onChange={(e) => { setInstructions(e.target.value) }}
                        placeholder='Instructions' cols="40" rows="6" />
                </div>
                <div className='container'>
                    <button className='btn btn-outline-info p-3'>Submit Recipe</button>
                </div>
            </form>
        </div>
    )
}

export default Update