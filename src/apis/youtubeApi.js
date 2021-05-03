import axios from 'axios';

const KEY = 'AIzaSyD9YHKRxy5kk-7U_uIj_oAsAw-hCK1qiuw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});