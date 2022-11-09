import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default AllRoutes