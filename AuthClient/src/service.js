import axios from 'axios';

const apiUrl = "http://localhost:5125";
axios.defaults.baseURL = apiUrl;
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get('/items')    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result=await axios.post('/items',{name})
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result= await axios.put(`/items/${id}`,{isComplete})
    return result.data;
  },

  deleteTask:async(id)=>{
    const result=await axios.delete(`/items/${id}`);
    return result.data;
  }
};
