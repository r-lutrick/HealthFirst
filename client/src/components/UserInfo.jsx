import React, { useState, useEffect } from 'react'
import axios from "axios"
import View from './View'
import {Link} from 'react-router-dom'


const UserInfo = () => {
    // NOT RECOMMENDED TO SET THE WHOLE USER DUE TO PASSWORD
    const [user, setUser] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getUser`, {withCredentials: true})
            .then(res=> {
                setUser(res.data)
                setLoaded(true)
            })
            .catch()
    },[loaded])

    return (
        <>
            <h2>My Account</h2>
            <h4>First Name:</h4> <p>{loaded && user.firstName}</p>
            <h4>Recipes:</h4> 
            {
                // loaded && (user.recipes.length === 0 ? "No Recipes yet!" : user.recipes.map((recipe, i) => {
                loaded && user.recipes.map((recipe, i) => {
                    return (
                        <p key={i}>
                            <Link to={`/view/${recipe._id}`}>{recipe.name}</Link>
                        </p>
                    )
                })
                // If displaying "no recipes yet" then uncomment
                // ) 
            }
        </>
    )
}

export default UserInfo