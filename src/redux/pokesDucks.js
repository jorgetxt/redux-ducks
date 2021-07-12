import axios from 'axios'

// Constantes
const dataInicial = {
    array: [],
    offset: 0
}
const GET_POKE_SUCCESS = 'GET_POKE_SUCCESS'
const GET_POKE_NEXT_SUCCESS = 'GET_POKE_NEXT_SUCCESS'

// Reducer
export default function pokeReducer (state = dataInicial, action) {
    switch(action.type){
        case GET_POKE_SUCCESS:
            return {...state, array: action.payload}
        case GET_POKE_NEXT_SUCCESS:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default: 
            return state
    }
}

// Acciones
export const obtenerPokeAction = () => async (dispatch, getState) => {
    // console.log(getState())
    const {offset} = getState().pokemones
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: res.data.results,
        }
        )
    } catch (error) {
        console.log(error)
    }
}

