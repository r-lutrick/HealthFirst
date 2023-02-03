import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const changeHandler =(e) =>{
        let {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/register`, user, {withCredentials:true})
            .then(res=>{
                console.log(res.data);
                navigate("/")
            })
            .catch(err => console.log(err.response))
    }


    return (
        <div className='regform'>
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">First name</label>
                    <input className='form-control' type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Last name</label>
                    <input className='form-control' type="text" name="lastName" value={user.lastName} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Email</label>
                    <input className='form-control' type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Password</label>
                    <input className='form-control' type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Confirm Password</label>
                    <input className='form-control' type="password" name="confirmPassword" value={user.confirmPassword} onChange={changeHandler} />
                </div>
                <button className="btn btn-info"> Register </button>
            </form>
        </div>
    )
}

export default Register
