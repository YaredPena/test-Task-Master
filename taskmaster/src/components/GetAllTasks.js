import { getTasks } from '../services/TaskService';

const GetAllTasks = async () => {
  try {
    const data = await getTasks();
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export default GetAllTasks;