import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID cba67c10dbb08761fe554aecb321a37b4f77029e49f248b72de0532199a2fc18'
    }
});