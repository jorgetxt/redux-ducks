
// Constantes
const dataInicial = {
    array: [],

}
const GET_CARD_SELECTED_SUCCESS = 'GET_CARD_SELECTED'
const GET_CARD_SELECTED_FAIL = 'GET_CARD_SELECTED_FAIL'

// Reducer
export default function getCardSelectedReducer (state = dataInicial, action) {
    switch(action.type){
        case GET_CARD_SELECTED_SUCCESS:
            return {...state, array: action.payload}
        case GET_CARD_SELECTED_FAIL:
            return {...state, array: action.payload}
        default: 
            return state
    }
}

// Acciones
export const obtenerGetCardSelectedAction = (card) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_CARD_SELECTED_SUCCESS,
            payload: card,
        }
        )
        console.log(card,"selected")
    } catch (error) {
        dispatch({
          type: GET_CARD_SELECTED_FAIL,
          payload: error,
        });
    }
}

