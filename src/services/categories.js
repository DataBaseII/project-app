import axios from 'axios';
import ROUTE from './routes';

export function getAllCategories(){
  return axios.get(`${ROUTE}/categories`);
}

export function getCategory(id){
  return axios.get(`${ROUTE}/categories/${id}`);
}

export function createCategory(body){
  return axios.post(`${ROUTE}/categories`, body);
}

export function deleteCategory(id){
  return axios.delete(`${ROUTE}/categories/${id}`); 
} 


export function updateCategory(id, body){
  return axios.put(`${ROUTE}/categories/${id}`, body); 
} 
