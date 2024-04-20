const api = (() => {
  const BASE_URL = 'http://localhost:8000';

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  function setAccessToken(token) {
    return localStorage.setItem('accessToken', token);
  }

  async function fetchWithToken(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function register({ name, email, password }) {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const responseJson = await response.json();

      const { user } = responseJson;

      return user;
    } catch (error) {
      throw new Error(error.message || 'Something went wrong');
    }
  }

  async function login({ email, password }) {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const responseJson = await response.json();

      const { token } = responseJson;

      return token;
    } catch (error) {
      throw new Error(error.message || 'Something went wrong');
    }
  }

  async function addBook(bookData) {
    try {
      const response = await fetchWithToken(`${BASE_URL}/books`, {
        method: 'POST',
        body: bookData, // Kirim FormData langsung
      });

      const responseJson = await response.json();

      const { book } = responseJson;

      return book;
    } catch (error) {
      throw new Error(error.message || 'Something went wrong');
    }
  }

  async function getAllBooks() {
    try {
      const response = await fetch(`${BASE_URL}/books`);
      const responseJson = await response.json();

      const { books } = responseJson;

      return books;
    } catch (error) {
      throw new Error(error.message || 'Something went wrong');
    }
  }

  async function getDetailBook(bookId) {
    try {
      const response = await fetch(`${BASE_URL}/books/${bookId}`);
      const responseJson = await response.json();

      const { book } = responseJson;

      return book;
    } catch (err) {
      throw new Error(err.message || 'Something went wrong');
    }
  }
  async function editBook({ id, title, author, publisher, year, pages }) {
    try {
      const bookData = {
        id,
        title,
        author,
        publisher,
        year,
        pages,
      };

      const response = await fetchWithToken(`${BASE_URL}/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      const responseJson = await response.json();
      console.log(responseJson);

      const { book } = responseJson;

      return book;
    } catch (error) {
      throw new Error(error.message || 'Something went wrong');
    }
  }

  async function deleteBook(id) {
    try {
      const response = await fetchWithToken(`${BASE_URL}/books/${id}`, {
        method: 'DELETE',
      });

      const responseJson = await response.json();

      return responseJson.data;
    } catch (error) {
      throw new Error(error.message || 'Something went wrong');
    }
  }

  return {
    setAccessToken,
    getAccessToken,
    register,
    login,
    addBook,
    getAllBooks,
    getDetailBook,
    editBook,
    deleteBook,
  };
})();

export default api;
