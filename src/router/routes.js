import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from '../pages'
import StudentHome from '../pages/Student'

const MainRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/student-profile/:id' element={<StudentHome />} />
        </Routes>
      </Router>
  )
}

export default MainRoutes