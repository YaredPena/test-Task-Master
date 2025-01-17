import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetAllTasks from '../components/GetAllTasks';
import GetTask from '../components/GetTask';
import DeleteTask from '../components/DeleteTask';
import CreateTaskForm from '../components/CreateTaskForm';
import UpdateTaskForm from '../components/UpdateTaskForm';
import './TaskPage.css';

function TaskPage({ setData, data }) {
  const [showGetTask, setShowGetTask] = useState(false);
  const [showDeleteTask, setShowDeleteTask] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showUpdateTask, setShowUpdateTask] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all tasks when the component mounts
    const fetchTasks = async () => {
      try {
        const tasks = await GetAllTasks();
        console.log('Fetched tasks:', tasks); // Log the tasks to inspect the structure
        setData(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [setData]);

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateFilter(e.target.value);
  };

  const handleShowAllTasks = async () => {
    try {
      const tasks = await GetAllTasks();
      setData(tasks);
      setStatusFilter('');
      setPriorityFilter('');
      setNameFilter('');
      setDateFilter('');
    } catch (error) {
      console.error('Error fetching all tasks:', error);
    }
  };

  const filteredTasks = data.filter((task) => {
    const taskDueDate = new Date(task.dueDate).toISOString().split('T')[0];
    return (
      (statusFilter === '' || task.status === statusFilter) &&
      (priorityFilter === '' || task.priority === priorityFilter) &&
      (nameFilter === '' || task.title.toLowerCase().includes(nameFilter.toLowerCase())) &&
      (dateFilter === '' || taskDueDate === dateFilter)
    );
  });

  return (
    <div className="taskPage">
      <div className="taskMenu">
        <h2>Task Actions</h2>
        <button onClick={() => setShowGetTask(!showGetTask)}>Get Task</button>
        {showGetTask && <GetTask setData={setData} />}
        <button onClick={() => setShowDeleteTask(!showDeleteTask)}>Delete Task</button>
        {showDeleteTask && <DeleteTask setData={setData} />}
        <button onClick={() => setShowCreateTask(!showCreateTask)}>Create Task</button>
        {showCreateTask && <CreateTaskForm setData={setData} />}
        <button onClick={() => setShowUpdateTask(!showUpdateTask)}>Update Task</button>
        {showUpdateTask && <UpdateTaskForm setData={setData} />}
        <button onClick={handleShowAllTasks}>Show All Tasks</button>
        <button onClick={() => navigate('/')}>Go to Homepage</button>
      </div>
      <div className="taskList">
        <h1>All Tasks</h1>
        <div className="filters">
          <label>
            Name:
            <input type="text" value={nameFilter} onChange={handleNameChange} />
          </label>
          <label>
            Date:
            <input type="date" value={dateFilter} onChange={handleDateChange} />
          </label>
          <label>
            Status:
            <select value={statusFilter} onChange={handleStatusChange}>
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </label>
          <label>
            Priority:
            <select value={priorityFilter} onChange={handlePriorityChange}>
              <option value="">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>
        <div className="taskListContent">
          {filteredTasks.length > 0 ? (
            <ul>
              {filteredTasks.map((task) => (
                <li key={task._id}>
                  <h3>{task.title}</h3>
                  <p>ID: {task._id}</p>
                  <p>{task.description}</p>
                  <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
                  <p>Status: {task.status}</p>
                  <p>Priority: {task.priority}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskPage;