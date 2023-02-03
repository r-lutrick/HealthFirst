import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const changeHandler = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        // e.preventDefault()
        axios.post(`http://localhost:8000/api/login`, user, { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate("/myaccount")
            })
            .catch(err => console.log(err.response))
    }


    return (
        <div>
            <div>
                <h5>No account? Sign up here!</h5>
                <Link className='btn btn-outline-info' to='/register'>Sign Up</Link>
            </div>
            <form>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <input className='form-control' type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div>
                    <label className="col-sm-2 col-form-label">Password</label>
                    <input className='form-control' type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
            </form>
            <div className='d-flex justify-content-end my-3 gap-1'>
                <button onClick={submitHandler} className='btn btn-info'> Login </button><br />
            </div>
        </div>
    )
}

export default Login