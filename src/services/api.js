import axios from 'axios';

const BASE_URL = 'https://hazlanrozaimi.com';

const getContent = data => axios.get(BASE_URL, data).then(res => res.data);

export { getContent }
