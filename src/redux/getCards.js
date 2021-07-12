import axios from 'axios'

// Constantes
const dataInicial = {
    array: [],

}
const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
const GET_CARD_FAIL = 'GET_CARD_FAIL'

// Reducer
export default function getCardsReducer (state = dataInicial, action) {
    switch(action.type){
        case GET_CARDS_SUCCESS:
            return {...state, array: action.payload}
        case GET_CARD_FAIL:
            return {...state, array: action.payload}
        default: 
            return state
    }
}
const usernameLocal = JSON.parse(localStorage.getItem('user'))

// Acciones 
export const obtenerGetCardsAction = (username) => async (dispatch, getState) => {
    // console.log(getState())
    try {
        var config = {
            method: "get",
            url: `http://localhost:3000/api/card/${usernameLocal.username}`,
            headers: {
              "Content-Type": "application/json",
              "Authorization": usernameLocal.token,
            },
          };
          const res = await axios(config);
        dispatch({
            type: GET_CARDS_SUCCESS,
            payload: res.data,
        }
        )
    } catch (error) { 
        console.log(error)
        console.log(error.response.data.msg);
        dispatch({
          type: GET_CARD_FAIL,
          payload: error.response.data,
        });
    }
}

