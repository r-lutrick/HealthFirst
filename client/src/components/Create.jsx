import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    // Variable/Hooks here
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [instructions, setInstructions] = useState('')
    const [servings, setServings] = useState(0)
    const [imglink, setImglink] = useState('')
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
    const handleIngUpdate = (index, val) => {
        const newIngredients = [...ingredients]
        newIngredients[index] = val
        setIngredients(newIngredients)
    }
    const handleIngDelete = (e, ing) => {
        e.preventDefault()
        const newIngredients = ingredients.filter((i) => i !== ing)
        setIngredients(newIngredients)
    }


    const addTag = (e) => {
        e.preventDefault()
        setTags([...tags, tag])
    }
    const handleTagUpdate = (index, tag) => {
        const newTags = [...tags]
        newTags[index] = tag
        setTags(newTags)
    }
    const handleTagDelete = (e, tag) => {
        e.preventDefault()
        const newTags = tags.filter((t) => t !== tag)
        setTags(newTags)
    }


    // Form SUBMISSION
    // should include a recipe preview to either edit/update, then ultimately submit to the DB -Kat
    const handleSubmit = (e) => {
        e.preventDefault()
        const postObj = {
            name,
            description,
            instructions,
            servings,
            tags,
            ingredients,
            imglink
        }
        // console.log('post object: ', postObj)
        // Axios defaults to not passing credentials. this must be set to TRUE!!!!!!
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:8000/api/recipe/create', postObj)
            .then(res => {
                // console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log('post error', err)
            })
    }
    const handleCancel = () => {
        navigate(`/`)
    }


    // Render
    return (
        <div>
            <h3>Create New Recipe!</h3>
            <form className='d-flex justify-content-between shadow form-group'>
                <div className='col-4'>
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
                </div>
                {/* INGREDIENT COLUMN */}
                <div className='col-4'>
                    <label htmlFor="instructions"><b>Ingredients</b></label>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='Add an ingredient'
                            type="text" onChange={(e) => { setIngredient(e.target.value) }} />
                        <button className='btn btn-info' onClick={addIngredient}>Add</button>
                    </div>
                    <hr />
                    {/* LOAD INGREDIENTS */}
                    {
                        ingredients.map((ing, i) => {
                            return (
                                <div key={i} className='d-flex my-2'>
                                    <input className='form-control' value={ing}
                                        type="text" onChange={(e) => { handleIngUpdate(i, e.target.value) }} />
                                    <button className='btn btn-sm btn-outline-danger' onClick={(e) => { handleIngDelete(e, ing) }}>Delete</button>
                                </div>
                            )
                        })
                    }
                    { /* SERVING COLUMN */}
                    <label htmlFor="instructions"><b>Servings</b></label>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='0'
                            type="number" onChange={(e) => { setServings(e.target.value) }} />
                    </div>
                </div>
                {/* TAG COLUMN */}
                <div className='col-4'>
                    <label htmlFor="instructions"><b>Tags</b></label>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='Add a tag'
                            type="text" onChange={(e) => { setTag(e.target.value) }} />
                        <button className='btn btn-info' onClick={addTag}>Add</button>
                    </div>
                    <hr />
                    {/* LOAD TAGS */}
                    {
                        tags.map((tag, i) => {
                            return (
                                <div key={i} className='d-flex my-2'>
                                    <input className='form-control' value={tag}
                                        type="text" onChange={(e) => handleTagUpdate(i, e.target.value)} />
                                    <button className='btn btn-sm btn-outline-danger' onClick={(e) => { handleTagDelete(e, tag) }}>Delete</button>
                                </div>
                            )
                        })
                    }
                    <label htmlFor="instructions"><b>Image Link</b></label>
                    <div className='d-flex'>
                        <input className='form-control'
                            type="text" onChange={(e) => { setImglink(e.target.value) }} />
                    </div>
                </div>
            </form>
            {/* BUTTONS */}
            <div className='d-flex justify-content-end my-2 gap-2'>
                <button onClick={handleSubmit} className='btn btn-success shadow'>Submit</button>
                <button onClick={handleCancel} className='btn btn-outline-warning shadow'>Cancel</button>
            </div>
        </div>
    )
}


export default Create