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
            <form onSubmit={handleSubmit} className='d-flex'>
                <div className='container'>
                    <div>
                        <input className='form-control' placeholder='Name'
                            type="text" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <input className='form-control' placeholder='Description'
                            type="text" onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='Add an ingredient'
                            type="text" onChange={(e) => { setIngredient(e.target.value) }} />
                        <button className='btn btn-outline-dark' onClick={addIngredient}>+</button>
                    </div>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='Add a tag'
                            type="text" onChange={(e) => { setTag(e.target.value) }} />
                        <button className='btn btn-outline-dark' onClick={addTag}>+</button>
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


export default Create