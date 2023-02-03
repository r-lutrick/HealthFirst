import React, { useState, useEffect } from 'react'
import axios from "axios"
import View from './View'
import {Link} from 'react-router-dom'


const UserInfo = () => {
    // NOT RECOMMENDED TO SET THE WHOLE USER DUE TO PASSWORD
    const [user, setUser] = useState()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getUser`, {withCredentials: true})
            .then(res=> {
                setUser(res.data)
                // console.log("USER RECIPES: ",user.recipes)
                console.log("Data:", res.data)
            })
            .catch()
    },[])

    return (
        <div>
            <h2>My Account</h2>
            <h4>First Name:</h4> <p>{user && user.firstName}</p>
            <h4>Recipes:</h4> {
                user && user.recipes.map((recipe, i) => {
                    return (
                        <div key={i}>
                            {/* <p>{recipe.name}</p> */}
                            <Link to={`/view/${recipe._id}`}>{recipe.name}</Link>
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default UserInfo