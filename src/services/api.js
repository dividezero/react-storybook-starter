import axios from 'axios';

const BASE_URL = 'https://marketplace-backend.datum.org/api/developer/v1/consent';

const createConsent = data => axios.put(BASE_URL, data).then(res => res.data);

export { createConsent }
