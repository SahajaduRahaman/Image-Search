import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Navbar from './pages/Navbar'
import PhotoDetails from './pages/PhotoDetails'
import Photos from './pages/Photos'
import Footer from './pages/Footer'

const App = () => {

    const [item, setItem] = useState("");

    useEffect(() => {

    },[item])

    return (
        <BrowserRouter>
            <Navbar item={item} setItem={setItem}/>
            <Routes>
                <Route path='/' exact element={<Photos item={item} /> }/>
                <Route path='/photos/:id' element={<PhotoDetails /> }/>
            </Routes>
            <Footer setItem={setItem} />
        </BrowserRouter>
    )
}

export default App