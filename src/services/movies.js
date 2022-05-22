import axios from 'axios';
import ROUTE from './routes';

export function getAllMovies(){
  return axios.get(`${ROUTE}/movies`);
}

export function getMovie(id){
  return axios.get(`${ROUTE}/movies/${id}`);
}

export function createMovie(body){
  return axios.post(`${ROUTE}/movies`, body);
}

export function deleteMovie(id){
  return axios.delete(`${ROUTE}/movies/${id}`); 
} 
