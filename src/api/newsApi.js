import axios from 'axios';

const API_KEY = 'your_newsapi_key';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category, page) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      page,
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
};
