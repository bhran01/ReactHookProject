import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes/Route'
import Register from './pages/Register'
import Layout from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {
            routes.map((routeObj, index) => {
              return <Route key={index} path={routeObj.path} element={routeObj.element} />
            })
          }
        </Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
