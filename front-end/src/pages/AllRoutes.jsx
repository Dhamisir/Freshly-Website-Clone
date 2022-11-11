import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminRequireAuth from '../hoc/AdminRequireAuth';
import AdminHome from './AdminPages/AdminHome';
import AdminLogin from './AdminPages/AdminLogin';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Home from "./home/Home";
import AdminProduct from './AdminPages/AdminProduct';
import AdminUser from './AdminPages/AdminUser';
import Cart from './Cart';

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin' element={<AdminRequireAuth><AdminHome /></AdminRequireAuth>} />
                <Route path='/admin-login' element={<AdminLogin />} />
                <Route
                    path="/admin/product"
                    element={
                        <AdminRequireAuth>
                            <AdminProduct />
                        </AdminRequireAuth>
                    }
                ></Route>
                <Route
                    path="/admin/user"
                    element={
                        <AdminRequireAuth>
                            <AdminUser />
                        </AdminRequireAuth>
                    }
                ></Route>
            </Routes>
        </>
    )
}

export default AllRoutes