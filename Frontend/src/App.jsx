import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './css/style.css';

export default function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
          <Header />
          <div className="container mt-5 pt-4">
            {/* <Routes>
              <Route path="/ingredients/add" element={<Ingredient />} />
              <Route path="/ingredients/benefit" element={<IngredientBenefit/>} />

            </Routes> */}
          </div>
        </div>
      </div>
    </Router>
  );
}