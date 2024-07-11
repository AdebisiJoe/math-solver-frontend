import axios from 'axios';

const api = axios.create({
  baseURL: 'https://math-solver-backend.onrender.com', 
});

export const solveQuestion = async (question: string) => {
  const response = await api.post('/math/solve', { question });
  return response.data.solution;
};

export const getPastQuestions = async (question: string) => {
  const response = await api.post('/math/similar', { question });
  console.log(response.data);
  return response.data;
};
