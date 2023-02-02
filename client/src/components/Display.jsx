import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Display = () => {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe/get')
            .then((res) => {
                console.log(res.data)
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
            <h3>Featured Recipes</h3>
            {
                recipes.map((rec, i) => {
                    return (
                        <div onClick={() => {handleDivClick(rec._id)}} className='card shadow my-2' style={{cursor:'pointer'}} key={i}>
                            {/* IMG HERE (img className="card-img-top"_ */}
                            <div className='card-body'>
                                <h5 className='card-title'>{rec.name}</h5>
                                {/* AUTHOR HERE */}
                                <p className='card-text'>{rec.description} </p>
                            </div>
                            <ul className='list-group list-group-flush'>
                                {rec.tags.map((tag, i) => {
                                    return (
                                        <li className='list-group-item' key={i}>
                                            {tag}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className=' d-flex p-2 justify-content-end'>
                                {/* <Link to={`/view/${rec._id}`} className='btn btn-outline-info'>View</Link> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display