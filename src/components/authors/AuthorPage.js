import React from "react";
import AuthorTable from "./AuthorTable";
import PropTypes from "prop-types";

export default function AuthorPage({ authors }) {
  return <AuthorTable authors={authors} />
}

AuthorPage.propTypes = {
  authors: PropTypes.array.isRequired
};