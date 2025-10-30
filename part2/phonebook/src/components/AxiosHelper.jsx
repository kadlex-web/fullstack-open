import axios from  'axios'
const url = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (obj) => {
    const request = axios.post(url, obj)
    return request.then(response => response.data)
}

const remove = (id) => {
    const urlDelete = `${url}/${id}`
    const request = axios.delete(urlDelete)
    return request.then(response => response.data)
}

export default {getAll, create, remove}