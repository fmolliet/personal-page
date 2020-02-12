import axios from 'axios';

require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })

const api = axios.create({
    // caso seja no emulador só colocar localhost ou 10.0.2.2
    baseURL: process.env.HOSTNAME + ':'+ process.env.PORT,
});

export default api;