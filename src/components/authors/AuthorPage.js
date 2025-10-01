import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthorTable from "./AuthorTable";
import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCourses } from "../../redux/actions/courseActions";
import { useNavigate } from "react-router-dom";
//import Spinner from "../common/Spinner";
//import PropTypes from "prop-types";

export default function AuthorPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authors = useSelector(state => state.authors);
  const courses = useSelector(state => state.courses);

  useEffect(() => {
    if (!authors || authors.length === 0) {
      dispatch(loadAuthors()).catch(error => {
        alert("Loading authors failed" + error);
      });
    }
    if (!courses || courses.length === 0) {
      dispatch(loadCourses()).catch(error => {
        alert("Loading courses failed" + error);
      });
    }
  }, [authors, courses]);
  
  return (
    <>
      <h2>Authors</h2>
      <button
        style={{ marginBottom: 20 }}
        className="btn btn-primary add-author"
        onClick={() => navigate("/author")}
      >
        Add Author
      </button>

      <AuthorTable authors={authors} courses={courses} />
    </>
  );
}
