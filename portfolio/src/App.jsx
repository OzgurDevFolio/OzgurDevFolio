import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import HireMe from './components/HireMe'

export default function App() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hireMe" element={<HireMe />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
