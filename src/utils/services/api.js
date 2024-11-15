// For API call functions (fetch with auth)
import API_ENDPOINTS from '../../config/apiConfig';
import { removeID } from './auth';

export const loginUser = async (credentials) => {
    const response = await fetch(API_ENDPOINTS.login, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

export const registerUser = async (credentials) => {
    const response = await fetch(API_ENDPOINTS.register, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

export const logoutUser = () => {
    removeID();
    window.location.href = '/login';  // Redirect to home page or login
};
