import React /*,{useState}*/ from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

export default function AuthorForm({ author, onChange, onSave, errors }) {
  // optional id for editing
  console.log("Author Form author prop:", author);
  console.log("onSave prop in AuthorForm:", onSave);
  return (
    <form onSubmit={onSave}>
      <h2>{author.id ? "Edit" : "Add"} Author</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="Author Name"
        value={author.name}
        onChange={onChange}
      />

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
