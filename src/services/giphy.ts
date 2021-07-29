import { Gif } from 'models/Gif';
import { api } from '../tools/axios';

interface FetchTrendingGifsResponse {
  data: Gif[];
  meta: any;
  pagination: any;
}

export const fetchTrendingGifs = async () => {
  const { data } = await api.get<FetchTrendingGifsResponse>(`gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`);
  return data;
};

export const searchGif = async (q: string) => {
  const { data } = await api.get(`gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${q}`);
  return data;
};


