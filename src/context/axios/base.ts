import axios from 'axios';
import { GRAPHQL_API_URL } from 'react-native-dotenv';

export const API = axios.create({
  baseURL: GRAPHQL_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*',
  },
  timeout: 2000,
});
