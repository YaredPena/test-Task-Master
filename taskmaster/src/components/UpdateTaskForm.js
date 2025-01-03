import React, { useState } from 'react';
import { updateTask } from '../services/TaskService';

const UpdateTaskForm = ({ setData }) => {
  const [taskId, setTaskId] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updateDueDate, setUpdateDueDate] = useState('');
  const [updateStatus, setUpdateStatus] = useState('');
  const [updatePriority, setUpdatePriority] = useState('');

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    try {
      const updatedTask = {
        title: updateTitle,
        description: updateDescription,
        dueDate: updateDueDate,
        status: updateStatus,
        priority: updatePriority,
      };
      const data = await updateTask(taskId, updatedTask);
      setData((prevData) =>
        prevData.map((task) => (task.id === taskId ? data : task))
      );
      setTaskId('');
      setUpdateTitle('');
      setUpdateDescription('');
      setUpdateDueDate('');
      setUpdateStatus('');
      setUpdatePriority('');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={handleUpdateTask}>
        <input
          type="text"
          placeholder="Task ID"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={updateDescription}
          onChange={(e) => setUpdateDescription(e.target.value)}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={updateDueDate}
          onChange={(e) => setUpdateDueDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={updateStatus}
          onChange={(e) => setUpdateStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Priority"
          value={updatePriority}
          onChange={(e) => setUpdatePriority(e.target.value)}
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTaskForm;