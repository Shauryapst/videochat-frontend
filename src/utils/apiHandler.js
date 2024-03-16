import axios from 'axios';

const BASE_URL = process.env.BACKEND_URL || 'http://localhost:8080';;

const apiRequest = async (method, endpoint, { body, params, queries } = {}) => {
  const accessToken = localStorage.getItem('token')?.accessToken;

  let url = `${BASE_URL}${endpoint}`;
  if (params) {
    url += `/${params}`;
  }

  const options = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    data: body,
    params: queries,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
};

export const apiPost = async (endpoint, { body, params, queries } = {}) => {
  return apiRequest('post', endpoint, { body, params, queries });
};

export const apiGet = async (endpoint, { params, queries } = {}) => {
  return apiRequest('get', endpoint, { params, queries });
};

export const apiPut = async (endpoint, { body, params, queries } = {}) => {
  return apiRequest('put', endpoint, { body, params, queries });
};

export const apiDelete = async (endpoint, { params, queries } = {}) => {
  return apiRequest('delete', endpoint, { params, queries });
};
