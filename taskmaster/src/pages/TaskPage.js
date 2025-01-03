import React, { useState, useEffect } from 'react';
import GetAllTasks from '../components/GetAllTasks';
import GetTask from '../components/GetTask';
import DeleteTask from '../components/DeleteTask';
import CreateTaskForm from '../components/CreateTaskForm';
import UpdateTaskForm from '../components/UpdateTaskForm';
import './TaskPage.css';

function TaskPage({ setData, data }) {
  useEffect(() => {
    // Fetch all tasks when the component mounts
    const fetchTasks = async () => {
      try {
        const tasks = await GetAllTasks();
        setData(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [setData]);

  return (
    <div className="taskContainer">
      <h1>All Tasks</h1>
      <GetTask setData={setData} />
      <DeleteTask setData={setData} />
      <CreateTaskForm setData={setData} />
      <UpdateTaskForm setData={setData} />
      {data.length > 0 ? (
        <ul>
          {data.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Status: {task.status}</p>
              <p>Priority: {task.priority}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default TaskPage;