import React, { useState } from 'react';
import { createTask } from '../src/services/TaskService';

function TaskForm({ onTaskCreated }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await createTask({ name: taskName });
      onTaskCreated(newTask);
      setTaskName('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;