import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a2485ffe469d3702dd09bf433a84acff60e168d2784ff5507f0276d97be351f0'
    }
});