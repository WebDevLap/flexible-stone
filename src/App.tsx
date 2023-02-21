import React from 'react';
import { HomePage } from './pages/HomePage/index';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';
import { ThermalPanels } from './pages/ThermalPanels';
import { useLocation } from 'react-router-dom';

export const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname]);
  // скролл наверх при изменении страницы

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/facadeTermelPanels/" element={<ThermalPanels />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
