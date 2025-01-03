import React from 'react';
import { getTasks } from '../services/TaskService';

const GetAllTasks = ({ setData }) => {
  const handleFetchTasks = async () => {
    try {
      const data = await getTasks();
      setData(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchTasks}>All Tasks</button>
    </div>
  );
};

export default GetAllTasks;