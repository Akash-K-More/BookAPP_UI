// For interceptors to add tokens to API requests
import { getID, removeID } from './auth';

export const fetchWithAuth = async (url, payload = {}) => {
    let token = getID();

    const headers = {
        'Content-Type': 'application/json',
        'user-id': token ? token : '',
    };

    // const fetchOptions = {
    //     ...options,
    //     headers,
    // };

    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: headers,
        });
        console.log(response)

        // If the token is expired (401 Unauthorized), attempt to refresh the token
        if (response.status === 401) {
            removeID();
            window.location.href = '/login';
            return;
        }

        return response;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const getWithAuth = async (url = {}) => {
    let token = getID();

    const headers = {
        'Content-Type': 'application/json',
        'user-id': token ? token : '',
    };

    // const fetchOptions = {
    //     ...options,
    //     headers,
    // };

    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });
        console.log(response)

        // If the token is expired (401 Unauthorized), attempt to refresh the token
        if (response.status === 401) {
            removeID();
            window.location.href = '/login';
            return;
        }

        return response;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};