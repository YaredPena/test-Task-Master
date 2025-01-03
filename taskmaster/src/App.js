import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTaskForm from './components/CreateTaskForm';
import UpdateTaskForm from './components/UpdateTaskForm';
import GetAllTasks from './components/GetAllTasks';
import GetTask from './components/GetTask';
import DeleteTask from './components/DeleteTask';

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <GetTask setData={setData} />
      <DeleteTask setData={setData} />
      <CreateTaskForm setData={setData} />
      <UpdateTaskForm setData={setData} />
      <GetAllTasks setData={setData} />
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;