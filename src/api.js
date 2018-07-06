import axios from 'axios';
const api=axios.create({
	baseURL: 'https://picsum.photos/',
});
export default api;