import React from "react";
import PropTypes from "prop-types";

export default function AuthorTable({ authors, courses }) {
  const tableRows = courses.map(course => {
    const author = authors.find(a => a.id === course.authorId);
    return {
      authorName: author ? author.name : "N/A",
      courseTitle: course.title,
      courseId: course.id,
    };
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {tableRows.map((row => (
          <tr key={row.coursesId}>
            <td>{row.courseId}</td>
            <td>{row.authorName}</td>
            <td>{row.courseTitle}</td>
          </tr>                     
        )))}
      </tbody>
    </table>
  );
}

AuthorTable.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired
};
