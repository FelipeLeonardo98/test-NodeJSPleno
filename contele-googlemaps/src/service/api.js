//imorting axios for access to API
import axios from 'axios';

//getting API's url
const api = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDeuPrnXLEdE2_wCuO-_KTPF9mCDW1n8qY&callback=initMap&libraries=&v=weekly'
});

export default api;