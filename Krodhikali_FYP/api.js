import axios from 'axios';

const API_BASE_URL = 'http://http://127.0.0.1:8000/api/';

export const fetchActivities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}activities/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};
