import axios from "axios";

// Constantes
const dataInicial = {
  array: [],
  offset: 0,
};
const GET_SIGNUP_SUCCESS = "GET_SIGNUP_SUCCESS";
const GET_SIGNUP_FAIL = "GET_SIGNUP_FAIL";

// Reducer
export default function signUpReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_SIGNUP_SUCCESS:
      return { ...state, array: action.payload };
    case GET_SIGNUP_FAIL:
    return { ...state, array: action.payload };
    default:
      return state;
  }
}

// Acciones
export const signUpAccion =(username,names, email, password) => async (dispatch, getState) => {
    try {
      var data = JSON.stringify({
        username: username,
        password: password,
        names: names,
        email: email
      });
      var config = {
        method: "post",
        url: "http://localhost:3000/api/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const res = await axios(config);

      dispatch({

        type: GET_SIGNUP_SUCCESS,
        payload: res.data,
      });
      console.log(res.data)
      console.log("hola")

    } catch (error) {
      dispatch({
        type: GET_SIGNUP_FAIL,
        payload: error.response.data,
      });
    }
  };
