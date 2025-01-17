import React, { useState } from 'react';
import { getTask } from '../services/TaskService';

const GetTask = ({ setData }) => {
  const [taskId, setTaskId] = useState('');

  const handleGetTask = async () => {
    try {
      const data = await getTask(taskId);
      setData([data]);
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
      />
      <button onClick={handleGetTask}>Get Task ID</button>
    </div>
  );
};

export default GetTask;