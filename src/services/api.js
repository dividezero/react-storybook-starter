import axios from 'axios';

const BASE_URL = 'https://marketplace-backend.datum.org/';

const createConsent = data => axios.put(BASE_URL, data);

export { createConsent }
