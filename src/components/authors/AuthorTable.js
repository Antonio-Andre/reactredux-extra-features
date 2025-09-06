import React from "react";
import PropTypes from "prop-types";


export default function AuthorTable({authors}) {
  
  if (!Array.isArray(authors)) {
    return <h2>Not an array</h2>;
  }
  if (authors.length === 0) {
    return <h2>Authors List is Empty</h2>;
  }  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.id}>
            <td>{author.id}</td>
            <td>{author.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

AuthorTable.propTypes = {
  authors: PropTypes.array.isRequired,
};