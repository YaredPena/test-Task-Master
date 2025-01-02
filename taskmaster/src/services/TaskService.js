import axios from 'axios';
import config from '../config';

const apiUrl = config.apiUrl;

export const getTasks = async () => {
  try {
    const response = await axios.get(`${apiUrl}/tasks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(`${apiUrl}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};