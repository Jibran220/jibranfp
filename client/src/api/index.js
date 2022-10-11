import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5005' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile') || localStorage.getItem('profilev')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchProducts = () => API.get('/products');
export const createProducts = (newPost) => API.post('/products', newPost);
export const createexcell = (newPost) => API.post('/products', newPost);
export const likePost = (id) => API.patch(`/products/${id}/likePost`);
export const updateProductss = (id, updatedPost) => API.patch(`/products/${id}`, updatedPost);
export const deleteProducts = (id) => API.delete(`/products/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
//vendor user
export const signInv = (formDatav) => API.post('/userv/signinv', formDatav);
export const signUpv = (formDatav) => API.post('/userv/signupv', formDatav);


export const fetchcomplaince = () => API.get('/complaince');
export const createcomplaince = (newPost) => API.post('/complaince', newPost);

export const fetchrfqmanager = () => API.get('/rfqmanagers');
export const createrfqmanager = (newRFQ) => API.post('/rfqmanagers', newRFQ);