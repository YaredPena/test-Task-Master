import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  return (
    <Router>
      <div className="container">
        <header>
          <h1 className="mainTitle">TaskMaster</h1>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskPage setData={setData} data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;