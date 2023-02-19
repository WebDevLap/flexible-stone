import React from 'react';
import {HomePage} from './pages/HomePage/index'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}
