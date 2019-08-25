import axios from 'axios';

const key = 'e072b905f0a8ea3a142cc2554fb433d5ac7143eea705e0a9765c39e8925494d9';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization': 'Client-ID ' + key
    }
});
