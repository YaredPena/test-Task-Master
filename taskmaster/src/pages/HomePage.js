import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomeContainer">
      <h1 className="homepage-title">Welcome to TaskMaster</h1>
      <p className="main-content">Manage your tasks efficiently and effectively.</p>
      <nav>
        <ul>
          <li>
            <Link to="/tasks">Task Page</Link>
          </li>
        </ul>
      </nav>
      <footer>
        <p className="footer-content">By Yared Pena</p>
      </footer>
    </div>
  );
}

export default HomePage;