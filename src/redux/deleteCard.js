import axios from 'axios'

// Constantes
const dataInicial = {
    array: [],

}
const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS'
const DELETE_CARD_FAIL = 'DELETE_CARD_FAIL'

// Reducer
export default function deleteCardReducer (state = dataInicial, action) {
    switch(action.type){
        case DELETE_CARD_SUCCESS:
            return {...state, array: action.payload}
        case DELETE_CARD_FAIL:
            return {...state, array: action.payload}
        default: 
            return state
    }
}
const usernameLocal = JSON.parse(localStorage.getItem('user'))

// Acciones 
export const obtenerDeleteCardAction = (_id) => async (dispatch, getState) => {
    try {
    
        var config = {
            method: "delete",
            url: `http://localhost:3000/api/card/${_id}`,
            headers: {
              "Content-Type": "application/json",
              "Authorization": usernameLocal.token,
            },
          };
          const res = await axios(config);
        dispatch({
            type: DELETE_CARD_SUCCESS,
            payload: res.data,
        }
        )
    } catch (error) {
        console.log(error)
        console.log(error.response.data.msg);
        dispatch({
          type: DELETE_CARD_FAIL,
          payload: error.response.data,
        });
    }
}

