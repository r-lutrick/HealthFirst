import React from 'react'
// Routes
import { Route, Routes } from 'react-router-dom';
// Component Display
import Display from '../components/Display';
import Create from '../components/Create';
import Update from '../components/Update';
import View from '../components/View';

const Main = () => {

    return (
        <div className='mr-3'>
            <Routes>
                <Route path='/' element={<Display />} />
                <Route path='/create' element={<Create />} />
                <Route path='/view/:id' element={<View />} />
                <Route path='/update/:id' element={<Update />} />
            </Routes>
        </div>
    )
}

export default Main