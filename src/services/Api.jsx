

import axios from 'axios';
export const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

export const Api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: APIHeaders,
});

Api.get('/users')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

  

 
