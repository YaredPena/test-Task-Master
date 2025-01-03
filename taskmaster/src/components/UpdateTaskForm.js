import React, { useState } from 'react';

function UpdateTaskForm({ setData }) {
  const [taskId, setTaskId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { title, description, dueDate, status, priority };
    try {
      const response = await fetch(`/api/patch/${taskId}`, {
        method: 'UPDATE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      const updatedTaskData = await response.json();
      setData((prevData) =>
        prevData.map((task) => (task._id === taskId ? updatedTaskData : task))
      );
      setTaskId('');
      setTitle('');
      setDescription('');
      setDueDate('');
      setStatus('');
      setPriority('');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task ID:
        <input type="text" value={taskId} onChange={(e) => setTaskId(e.target.value)} required />
      </label>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button type="submit">Update Task</button>
    </form>
  );
}

export default UpdateTaskForm;