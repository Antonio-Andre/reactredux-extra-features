import React from "react";
import PropTypes from "prop-types";

export default function PokeList({ pokemons }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Element</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map(poki => (
          <tr key={poki.id}>
            <td>{poki.name}</td>
            <td>{poki.color}</td>
            <td>{poki.element}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

PokeList.propTypes = {
  pokemons: PropTypes.array.isRequired
};
