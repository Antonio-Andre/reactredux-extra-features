import React from "react";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";

export default function AuthorTable({ authors }) {
  return authors.length === 0 ? (
    <Spinner />
  ) : (
    <>
      <button
        style={{ marginBottom: 20 }}
        className="btn btn-primary add-course"
      >
        Add Course
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
              <button className="btn btn-outline-danger">Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

AuthorTable.propTypes = {
  authors: PropTypes.array.isRequired
};
