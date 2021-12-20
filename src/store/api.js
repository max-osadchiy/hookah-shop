import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.0.115:8080/api/v1/',
});