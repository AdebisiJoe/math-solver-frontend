import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', 
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
