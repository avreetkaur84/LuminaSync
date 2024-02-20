import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "./Layout"
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home/Home'
import PersonalizeLighting from './PersonalizeLighting/PersonalizeLighting'
import EnergyChart from './EnergyChart/EnergyChart'
import AboutUs from "./AboutUs/AboutUs"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='personalizeLighting' element={<PersonalizeLighting/>}/>
      <Route path='energyChart' element={<EnergyChart/>}/>
      <Route path='aboutUs' element={<AboutUs/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </React.StrictMode>,
)
