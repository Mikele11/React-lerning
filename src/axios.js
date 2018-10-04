import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axios.defaults.headers.common['Autorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;