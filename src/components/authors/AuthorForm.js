import React /*,{useState}*/ from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import PropTypes from "prop-types";

export default function AuthorForm({
  author,
  onChange,
  onSave,
  errors,
  courses,
  selectedCourse,
}) {
  
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

      <SelectInput
        name="courseId"
        label="Course"
        value={selectedCourse ? selectedCourse.id : ""}
        defaultOption="Select Course"
        options={courses.map(c => ({
          value: c.id,
          text: c.title
        }))}
        onChange={onChange}
        error={errors.CourseId}
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
  onChange: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  selectedCourse: PropTypes.object.isRequired,
};
