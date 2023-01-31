import React from 'react'
// Routes
import { Route, Routes } from 'react-router-dom';
// Component Display
import Display from '../components/Display';
import Create from '../components/Create';
import Update from '../components/Update';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Display />} />
                <Route path='/create' element={<Create />} />
                <Route path='/update/:id' element={<Update />} />
            </Routes>
        </div>
    )
}

export default Main