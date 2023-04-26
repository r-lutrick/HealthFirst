import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Display = () => {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe/get')
            .then((res) => {
                setRecipes(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleDivClick = (id) => {
        navigate(`/view/${id}`)
    }

    return (
        <div className='px-3'>
            <h3 className='text-capitalize text-xl-center font-weight-bold'>Featured Recipes</h3>
            <div className="d-flex gap-1" >
                {
                    recipes.filter((recipe) => recipe.tags.some(element => element.toLowerCase() === 'featured')).map((rec, i) => {
                        return (
                            <div onClick={() => { handleDivClick(rec._id) }} className='card shadow my-2' style={{ cursor: 'pointer', width: "18rem" }} key={i}>
                                {/* IMG HERE (img className="card-img-top"_ */}
                                <img src={rec.imglink} alt={rec.name} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{rec.name}</h5>
                                    {/* AUTHOR HERE */}
                                    <p className='card-text'>{rec.description} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Display