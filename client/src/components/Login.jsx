import React, {useState} from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    const changeHandler =(e) =>{
        let {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const submitHandler = (e) =>{
        // e.preventDefault()
        axios.post(`http://localhost:8000/api/login`, user, {withCredentials:true})
            .then(res=>{
                console.log(res)
                navigate("/myaccount")})
            .catch(err => console.log(err.response))
    }


    return (
        <div>
            <Link to='/register'>Sign Up</Link>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <button> Login </button>
            </form>
        </div>
    )
}

export default Login