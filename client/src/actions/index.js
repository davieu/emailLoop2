import axios from 'axios';
import { FETCH_USER } from './types';

// export const fetchUser = () => async (dispatch) => {
//   const res = await axios.get('/api/current_user');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };

// super refactored but probably not ideal for readability ^^^^^
export const fetchUser = () => async (dispatch) =>
  dispatch({
    type: FETCH_USER,
    payload: await axios.get('/api/current_user').then((res) => res.data),
  });
