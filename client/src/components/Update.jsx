import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [instructions, setInstructions] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [tags, setTags] = useState([])
    // New items for arrays
    const [ingredient, setIngredient] = useState('')
    const [tag, setTag] = useState('')

    const [loaded, setLoaded] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/get/${id}`)
            .then(res => {
                const recipe = (res.data)
                setName(recipe.name)
                setDescription(recipe.description)
                setInstructions(recipe.instructions)
                setIngredients(recipe.ingredients)
                setTags(recipe.tags)
                setLoaded(true)
            })
            .catch(err => console.log(`Update error: ${err}`))
    }, [id])

    // Handle Navigation
    const handleSubmit = (e) => {
        e.preventDefault()
        const putObj = {
            name,
            description,
            instructions,
            ingredients,
            tags
        }
        axios.put(`http://localhost:8000/api/recipe/update/${id}`, putObj)
            .then(res => navigate(`/view/${id}`))
            .catch(err => console.log(err))
    }
    const handleCancel = () => {
        navigate(`/view/${id}`)
    }

    // Handle Ingredients
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

    // Handle Tags
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


    return (
        <div>
            <h3>Update Recipe</h3>
            <form className='d-flex form-group'>
                <div className='col-4 px-0 mr-2'>
                    {/* NAME */}
                    <div className='my-2'>
                        <label htmlFor="name"><b>Name</b></label>
                        <input className='form-control' value={name}
                            type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    {/* DESCRIPTION */}
                    <div className='my-2'>
                        <label htmlFor="description"><b>Description</b></label>
                        <textarea className='form-control' value={description}
                            type="text" onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    {/* INSTRUCTIONS */}
                    <div className='my-2'>
                        <label htmlFor="instructions"><b>Instructions</b></label>
                        <textarea className='form-control' value={instructions}
                            type="text" onChange={(e) => { setInstructions(e.target.value) }} />
                    </div>
                    {/* BUTTONS */}
                    <div className='d-flex justify-content-between my-2'>
                        <button onClick={handleSubmit} className='btn btn-success'>Update Recipe</button>
                        <button onClick={handleCancel} className='btn btn-outline-warning'>Cancel</button>
                    </div>
                </div>
                {/* INGREDIENT COLUMN */}
                <div className='col-4 px-0 mr-2'>
                    <b>Ingredients</b>
                    <div className='d-flex'>
                        <input type="text" className='form-control' onChange={(e) => { setIngredient(e.target.value) }} />
                        <button className='btn btn-success' onClick={(e) => { e.preventDefault(); setIngredients([...ingredients, ingredient]) }}>Add</button>
                    </div>
                    {/* LOAD INGREDIENTS */}
                    {
                        loaded && ingredients.map((ing, i) => {
                            return (
                                <div key={i} className='d-flex my-2'>
                                    <input className='form-control' value={ing}
                                        type="text" onChange={(e) => { handleIngUpdate(i, e.target.value) }} />
                                    <button className='btn btn-sm btn-outline-danger' onClick={(e) => { handleIngDelete(e, ing) }}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
                {/* TAG COLUMN */}
                <div className='col-4 px-0'>
                    <b>Tags</b>
                    <div className='d-flex'>
                        <input type="text" className='form-control' onChange={(e) => { setTag(e.target.value) }} />
                        <button className='btn btn btn-success' onClick={(e) => { e.preventDefault(); setTags([...tags, tag]) }}>Add</button>
                    </div>
                    {/* LOAD TAGS */}
                    {
                        loaded && tags.map((tag, i) => {
                            return (
                                <div key={i} className='d-flex my-2'>
                                    <input className='form-control' value={tag}
                                        type="text" onChange={(e) => handleTagUpdate(i, e.target.value)} />
                                    <button className='btn btn-sm btn-outline-danger' onClick={(e) => { handleTagDelete(e, tag) }}>Delete</button>
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