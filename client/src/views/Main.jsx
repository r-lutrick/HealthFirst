import React from 'react'
// Routes
import { Route, Routes } from 'react-router-dom';
// Component Display
import Display from '../components/Display';
import Create from '../components/Create';
import Update from '../components/Update';
import View from '../components/View';
import Register from '../components/Register'
import Login from '../components/Login'
import UserInfo from '../components/UserInfo'

const Main = () => {

    return (
        <div className='mr-3'>
            <Routes>
                <Route path='/' element={<Display />} />
                <Route path='/create' element={<Create />} />
                <Route path='/view/:id' element={<View />} />
                <Route path='/update/:id' element={<Update />} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/myaccount' element={<UserInfo/>}/>
            </Routes>
        </div>
    )
}

export default Main