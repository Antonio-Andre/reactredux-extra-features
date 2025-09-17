import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catchLoadPokemons } from "../../redux/actions/pokemonAction";
import {handleAddCourse} from "./GestorPokemon";
import PokeList from "./PokeList";
import Spinner from "../common/Spinner";

export default function DifferentHello() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(catchLoadPokemons());
    }
  }, [pokemons, dispatch]);

  return !pokemons || pokemons.length === 0 ? (
    <Spinner />
  ) : (
    <>
      <button
        style={{ marginBottom: 20 }}
        className="btn btn-primary add-course"
        onClick={handleAddCourse}
      >
        Add Pokemon to Pokedex
      </button>

      <PokeList pokemons={pokemons} />
    </>
  );
}
