import React, { useState } from 'react';
import { createTask } from '../services/TaskService';

const CreateTaskForm = ({ setData }) => {
  const [createTitle, setCreateTitle] = useState('');
  const [createDescription, setCreateDescription] = useState('');
  const [createDueDate, setCreateDueDate] = useState('');
  const [createStatus, setCreateStatus] = useState('');
  const [createPriority, setCreatePriority] = useState('');

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        title: createTitle,
        description: createDescription,
        dueDate: createDueDate,
        status: createStatus,
        priority: createPriority,
      };
      const createdTask = await createTask(newTask);
      setData((prevData) => [...prevData, createdTask]);
      setCreateTitle('');
      setCreateDescription('');
      setCreateDueDate('');
      setCreateStatus('');
      setCreatePriority('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Title"
          value={createTitle}
          onChange={(e) => setCreateTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={createDescription}
          onChange={(e) => setCreateDescription(e.target.value)}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={createDueDate}
          onChange={(e) => setCreateDueDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={createStatus}
          onChange={(e) => setCreateStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Priority"
          value={createPriority}
          onChange={(e) => setCreatePriority(e.target.value)}
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;