import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Effect from '../Effect/Effect'
import View from './View'

function Main() {
  return (
    <>
        <nav>
            <Link> MY STORE</Link>
        </nav>
        <BrowserRouter>
            <Routes>
                <Route path='/Product List' element={<Effect/>}/>
                <Route path='/product view' element={<View/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Main