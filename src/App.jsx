import { useState } from 'react'

import './App.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Componets/Header'
import Slider from './Componets/Slider'
import ProductionHouse from './Componets/ProductionHouse'
import GenreMovieList from './Componets/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />


      <Slider />


      <ProductionHouse />


      <GenreMovieList />
    </div>
  )
}

export default App
