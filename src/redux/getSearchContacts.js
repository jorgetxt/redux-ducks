import axios from 'axios'

// Constantes
const dataInicial = {
    array: [],

}
const GET_SEARCH_CONTACT_SUCCESS = 'GET_SEARCH_CONTACT_SUCCESS'
const GET_SEARCH_CONTACT_FAIL = 'SEARCH_CONTACT_FAIL'

// Reducer
export default function getSearchContactsReducer (state = dataInicial, action) {
    switch(action.type){
        case GET_SEARCH_CONTACT_SUCCESS:
            return {...state, array: action.payload}
        case GET_SEARCH_CONTACT_FAIL:
            return {...state, array: action.payload}
        default: 
            return state
    }
}
const usernameLocal = JSON.parse(localStorage.getItem('user'))

// Acciones 
export const obtenerGetSearchContactsAction = (username) => async (dispatch, getState) => {
    // console.log(getState())
    try {
        console.log(username)
        var data = JSON.stringify({
            "username": username
          });    
        var config = {
            method: "get",
            url: `http://localhost:3000/api/contacts`,
            headers: {
              "Content-Type": "application/json",
              "Authorization": usernameLocal.token,
            },
            data:data
          };
          const res = await axios(config);
        dispatch({
            type: GET_SEARCH_CONTACT_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error)
        
    }
}

