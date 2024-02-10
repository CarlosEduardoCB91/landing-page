import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/submit-form',
  headers: {
    'Content-Type': 'application/json',
  },
});

const submitForm = async (data) => {
  try {
    return await axiosInstance.post('', data);
  } catch (error) {
    throw error;
  }
};

const api = { submitForm };

export default api;