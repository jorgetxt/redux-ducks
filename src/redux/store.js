import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokesReducer from './pokesDucks'
import loginReducer from './loginDucks'
import signUpReducer from './signUpDucks'
import getCardsReducer from './getCards'
import getCardSelectedReducer from './getCardSelected'
import getSearchContactsReducer from './getSearchContacts'


const rootReducer = combineReducers({
    pokemones: pokesReducer,
    login: loginReducer,
    signUp: signUpReducer,
    getCards: getCardsReducer,
    getCardSelected: getCardSelectedReducer,
    getSearchContacts: getSearchContactsReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}
