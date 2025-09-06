import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {catchLoadPokemons} from "../../redux/actions/pokemonAction";
import PokeList from "./PokeList";

export default function DifferentHello() {

  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons);
  
  
  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(catchLoadPokemons());
    }
  }, [pokemons, dispatch]);

  return <PokeList pokemons={pokemons} />;
  
}
