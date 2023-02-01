import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    // Variable/Hooks here
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [instructions, setInstructions] = useState('')
    // Arrays
    const [ingredient, setIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [tag, setTag] = useState('')
    const [tags, setTags] = useState([])
    const navigate = useNavigate()
    // console.log(navigate)

    // Functions here
    const addIngredient = (e) => {
        e.preventDefault()
        setIngredients([...ingredients, ingredient])
    }
    const addTag = (e) => {
        e.preventDefault()
        setTags([...tags, tag])
    }

    // Form SUBMISSION
    // should include a recipe preview to either edit/update, then ultimately submit to the DB -Kat
    const handleSubmit = (e) => {
        e.preventDefault()
        const postObj = {
            name,
            description,
            instructions,
            tags,
            ingredients,
        }
        // console.log('post object: ', postObj)
        axios.post('http://localhost:8000/api/recipe/create', postObj)
            .then(res => {
                // console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log('post error', err)
            })
    }


    // Render
    return (
        <div>
            <h3>Create New Recipe!</h3>
            <form onSubmit={handleSubmit} className='d-flex form-group'>
                <div className='col-4 px-0 mr-2'>
                    {/* NAME */}
                    <div className='my-2'>
                        <label htmlFor="name"><b>Name</b></label>
                        <input className='form-control'
                            type="text" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    {/* DESCRIPTION */}
                    <div className='my-2'>
                        <label htmlFor="description"><b>Description</b></label>
                        <textarea className='form-control'
                            type="text" onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    {/* INSTRUCTIONS */}
                    <div className='my-2'>
                        <label htmlFor="instructions"><b>Instructions</b></label>
                        <textarea className='form-control' onChange={(e) => { setInstructions(e.target.value) }}
                            cols="40" rows="6" />
                    </div>
                    {/* BUTTONS */}
                    <button className='btn btn-outline-info my-2'>Submit</button>
                </div>
                {/* INGREDIENT COLUMN */}
                <div className='col-4 px-0 mr-2'>
                    <label htmlFor="instructions"><b>Ingredients</b></label>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='Add an ingredient'
                            type="text" onChange={(e) => { setIngredient(e.target.value) }} />
                        <button className='btn btn-outline-dark' onClick={addIngredient}>+</button>
                    </div>
                    <hr />
                    {/* LOAD INGREDIENTS */}
                    {ingredients.map((ing, i) => { return (<p key={i}>{ing}</p>) })}
                </div>
                {/* TAG COLUMN */}
                <div className='col-4 px-0 mr-2'>
                    <label htmlFor="instructions"><b>Tags</b></label>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='Add a tag'
                            type="text" onChange={(e) => { setTag(e.target.value) }} />
                        <button className='btn btn-outline-dark' onClick={addTag}>+</button>
                    </div>
                    <hr />
                    {/* LOAD TAGS */}
                    {tags.map((t, i) => {return (<p key={i}>{t}</p>)})}
                </div>
            </form>
        </div>
    )
}


export default Create