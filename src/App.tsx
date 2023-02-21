import React from 'react';
import {HomePage} from './pages/HomePage/index'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';
import { ThermalPanels } from './pages/ThermalPanels';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/facadeTermelPanels/' element={<ThermalPanels/>}/>
      </Routes>
    </div>
  )
}
