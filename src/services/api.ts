import axios from 'axios';



const api = axios.create({
  baseURL: 'https://math-solver-backend.onrender.com', 
});


// const api = axios.create({
//   baseURL: 'http://127.0.0.1:8000', 
// });



export const solveQuestion = async (question: string, useNeo4j = false) => {
  try {
    const response = await api.post('/math/solve', { question, useNeo4j });
    return response.data.solution;
  } catch (error) {
    console.error('Error solving question:', error);
    throw new Error('Failed to solve the question. Please try again.');
  }
};

export const getPastQuestions = async (question: string, useNeo4j = false) => {
  try {
    const response = await api.post('/math/similar', { question, useNeo4j });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching similar questions:', error);
    throw new Error('Failed to fetch similar questions. Please try again.');
  }
};