import axios from 'axios';
import ROUTE from './routes';

export function getAllUsers(){
  return axios.get(`${ROUTE}/users`);
}
