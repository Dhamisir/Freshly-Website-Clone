
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRequireAuth from '../hoc/AdminRequireAuth'
import AdminHome from './AdminPages/AdminHome'
import AdminLogin from './AdminPages/AdminLogin'
import Contact from './Contact'
import Login from './Login'
import Products from './product/Products'
import Signup from './Signup'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/contact' element={<Contact />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/admin' element={<AdminRequireAuth><AdminHome /></AdminRequireAuth>} />
                <Route path='/admin-login' element={<AdminLogin />} />
                <Route path='/products' element={<Products/>}> </Route>
            </Routes>
        </div>
    )
}

export default AllRoutes;
