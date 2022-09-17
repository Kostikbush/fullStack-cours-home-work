import axios from "axios"
const baseUrl = 'http://localhost:3001/persons';
const getAll =  () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        return response.data
  })
  
  }
  const addPhone = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }
  const deletePhone = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    const newRequest = axios.get(baseUrl)
    return newRequest.then(response => {
        return response.data
    })
  }
  const changeNumber = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }

export default {getAll, addPhone, deletePhone, changeNumber}