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
                // console.log(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id, loaded])

    return (
        <div className='p-3 shadow'>
            <img className='container p-0 shadow w-50 m-auto  mb-3' src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/assorted-sushi.jpg?quality=82&strip=1" alt="sushi" />
            <div>
                <h3>{recipe.name}</h3>
            </div>
            {/* Author goes here */}
            <div className='d-flex p-0 col'>
                <p className='col-8'><b>{recipe.description}</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque excepturi, quibusdam voluptatibus, nostrum nisi sed eveniet dolor autem dolores quidem sequi nobis dolorem error libero, odio incidunt veritatis consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eligendi, doloribus veniam rem dolorum, impedit corrupti nam doloremque aliquam voluptatem minima recusandae suscipit. Molestiae vitae dolor, fuga ipsam nesciunt eum. </p>
                <ul className='list-group col-4'>
                    {
                        loaded && recipe.tags.map((t, i) => { return (<li key={i} className='list-group-item'>{t}</li>) })
                    }
                </ul>
            </div>
            <div className='d-flex justify-content-between mt-3'>
                <h3>Ingredients</h3>
                {/* Serving size can increase/multiply the ingredients */}
                <p>Servings: <input type="number" defaultValue={recipe.servings}/></p>
            </div>
            <ul className='list-group col-12 my-2'>
                {
                    loaded && recipe.ingredients.map((ing, i) => { return (<li className='list-group-item' key={i}>{ing}</li>) })
                }
            </ul>
            <div>
                <h3>Instructions</h3>
                <ol className='list-group col-4'>
                    {loaded && recipe.instructions.split('\n').map((newLine, i) => {
                        return (
                            <div>
                                <li className='ml-5' key={i}>{newLine}</li>
                            </div>)
                    })}
                </ol>
            </div>
            <div className='d-flex justify-content-end gap-2'>
                <Link to={`/update/${id}`} className='btn btn-outline-info'>Update</Link>
                <DeleteButton recipeId={recipe._id} />
            </div>
        </div>
    )
}

export default View