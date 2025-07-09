import React from 'react'
import Home from './Home'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Course from './Course'
import Navbartest from './navbar'
import Book from './book'
import Favourite from './Favourite'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbartest/>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/course' element={<Course/>}></Route>
       <Route path='/book' element={<Book/>}></Route>
       <Route path='/favourite' element={<Favourite/>}></Route>
       
       
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App