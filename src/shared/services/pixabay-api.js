import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '31970293-19f969d9a323cf342718bb6ce',
    per_page: 12,
  },
});

export const searchImages = async (q, _page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      _page,
    },
  });
  return data;
};

export const getAllImages = async () => {
  const { data } = await instance.get('/');
  return data;
};
