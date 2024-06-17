import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'your_newsapi_key';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ category, page }) => {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        page,
        apiKey: API_KEY,
      },
    });
    return response.data;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    totalResults: 0,
    category: 'general',
    page: 1,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage } = newsSlice.actions;
export default newsSlice.reducer;
