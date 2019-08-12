import axios from 'axios';

const key = 'hehe';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization': 'Client-ID ' + key
    }
});
