import axios from 'axios';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = taskId => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const fetchTasks = () => async dispatch => {
  try {
    const response = await axios.get('http://172.20.10.3:8084/api/taskList');
    const tasks = response.data;
    dispatch({ type: FETCH_TASKS, payload: tasks });
  } catch (error) {
    console.error(error);
  }
};



