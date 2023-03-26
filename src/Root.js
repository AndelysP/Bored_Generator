import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import NotFound from './components/NotFound'
import NumberIdea from './components/NumberIdea'
import PriceIdea from './components/PriceIdea'
import TypeIdea from './components/TypeIdea'

const Root = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/type" element={<TypeIdea/>}/>
        <Route path="/number" element={<NumberIdea/>}/>
        <Route path="/price" element={<PriceIdea/>}/>
        <Route path="*" element={<NotFound />} />        
    </Routes>
   </BrowserRouter>
  )
}

export default Root