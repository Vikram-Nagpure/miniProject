import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Product from '../Components/Product'
import AddProduct from '../Components/AddProduct'
import Privatepage from '../Components/Privatepage'
import Description from '../Components/Description'
import Editpage from '../Components/Editpage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}>HomePagee</Route>
        <Route path="/login" element={<Login/>}>Login</Route>
        <Route path="/product" element={
            <Privatepage>
            <Product/>
            </Privatepage>
            }>Product</Route>
        <Route path="/addproduct" element={
            <Privatepage>
            <AddProduct/>
            </Privatepage>
            
            }>AddProduct</Route>
        <Route path='/description/:id' element={<Description/>}></Route>
        <Route path='/editpage' element={<Editpage/>}></Route>
    </Routes>
  )
}

export default AllRoutes