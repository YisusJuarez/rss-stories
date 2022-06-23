import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import './index.css'
import ListView from './routes/ListView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view' element={<ListView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
