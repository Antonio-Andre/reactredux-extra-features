import * as types from "./actionTypes";
import * as pokemonApi from "../../api/pokemonApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPokemonSucess(pokemons) {
  return { type: types.LOAD_POKEMONS_SUCCESS, pokemons };
}
export function loadPokemonError(error) {
  return { type: types.LOAD_POKEMONS_ERROR, error };
}


export function catchLoadPokemons() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return pokemonApi
      .getPokemons()
      .then(actionContent => {
        dispatch(loadPokemonSucess(actionContent));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
