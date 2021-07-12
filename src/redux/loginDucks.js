import axios from "axios";
import {UseLocalStorage} from '../localStorage/UseLocalStorage'

// Constantes
const dataInicial = {
  array: [],
  offset: 0,
};
const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
const GET_TOKEN_FAIL = "GET_TOKEN_FAIL";

// Reducer
export default function loginReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_TOKEN_SUCCESS:
      return { ...state, array: action.payload };
    case GET_TOKEN_FAIL:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

// Acciones
export const obtenerTokenAccion =(username, password) => async (dispatch, getState) => {
    try {
      var data = JSON.stringify({
        username: username,
        password: password,
      });
      var config = {
        method: "post",
        url: "http://localhost:3000/api/signin",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const res = await axios(config);

      dispatch({
        type: GET_TOKEN_SUCCESS,
        payload: res.data,
      });
    window.localStorage.setItem("user", JSON.stringify(res.data))
    } catch (error) {
      console.log(error)
      console.log(error.response.data.msg);
      dispatch({
        type: GET_TOKEN_FAIL,
        payload: error.response.data,
      });
      
    }
  };
