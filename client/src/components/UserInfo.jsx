import React, { useState, useEffect } from 'react'
import axios from "axios"


const UserInfo = () => {
    // NOT RECOMMENDED TO SET THE WHOLE USER DUE TO PASSWORD
    const [user, setUser] = useState()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getUser`, {withCredentials: true})
            .then(res=> setUser(res.data))
            .catch()
    },[])

    return (
        <div>UserInfo
            <h1> Username : {user && user.firstName}</h1>

        </div>
        
    )
}

export default UserInfo