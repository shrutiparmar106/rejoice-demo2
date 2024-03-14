import axios from 'axios';

export const apiMethods = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
};

const makeRequest = (method, url, data = null) => {
  const axiosConfig = {
    method: method.toLowerCase(),
    url: url,
    data: data,
  };
  return axios(axiosConfig);
};

export const makeApiRequest = async (method, url, data = null) => {
  try {
    const response = await makeRequest(method, url, data);
    console.log('response======>', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};
