const API_BASE_URL = 'http://localhost:3001/api'; // Replace with your API base URL

const API_ENDPOINTS = {
    register: `${API_BASE_URL}/auth/register`,
    login: `${API_BASE_URL}/auth/login`,
    getBooks: `${API_BASE_URL}/book/books`,
    getBookByID: `${API_BASE_URL}/book/books/user/`,
    addBooks: `${API_BASE_URL}/book/books`,
    deleteBooks: `${API_BASE_URL}/book/books/`,
    // Add more endpoints as needed
};

export default API_ENDPOINTS;