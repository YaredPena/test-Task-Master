import React, { useState } from 'react';
import { deleteTask } from '../services/TaskService';

const DeleteTask = ({ setData }) => {
  const [taskId, setTaskId] = useState('');

  const handleDeleteTask = async () => {
    try {
      await deleteTask(taskId);
      setData((prevData) => prevData.filter((task) => task.id !== taskId));
      setTaskId('');
    } catch (error) {
      console.error('Error deleting task:', error);
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
      <button onClick={handleDeleteTask}>Delete Task</button>
    </div>
  );
};

export default DeleteTask;