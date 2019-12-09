import axios from 'axios';

const serviceMei = axios.create({
  baseURL: 'http://localhost:3000',
});

export default serviceMei;
