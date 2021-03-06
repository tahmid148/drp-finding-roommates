import axios from 'axios'
const baseUrl = '/api/users'


const getAll = () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

// const create = newObj => {
//   const request = axios.post(baseUrl, newObj)
//   return request.then(response => response.data)
// }

// const update = (id, newObj) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObj)
//   return request.then(response => response.data)
// } 

const object = { 
  getAll: getAll
  // create: create, 
  // update: update 
}

export default object