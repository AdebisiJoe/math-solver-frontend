import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', 
});

export const solveQuestion = async (question: string) => {
  const response = await api.post('/solve', { question });
  return response.data.solution;
};
