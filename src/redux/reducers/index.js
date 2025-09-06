import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import pokemons from "./pokemonReducer";
import apiCallsInProgress from './apiStatusReducer';


const rootReducer = combineReducers({
    courses,
    authors,
    pokemons,
    apiCallsInProgress,
});

export default rootReducer;