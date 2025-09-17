import React from "react";
import PropTypes from "prop-types";

export default function AuthorTable({authors}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((a) => (
          <tr key={a.id}>
            <td>{a.id}</td>
            <td>{a.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


AuthorTable.propTypes = {
  authors: PropTypes.array.isRequired,
};
