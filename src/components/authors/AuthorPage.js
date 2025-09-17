import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthorTable from "./AuthorTable";
import { loadAuthors } from "../../redux/actions/authorActions";
import { useNavigate } from "react-router-dom";
//import Spinner from "../common/Spinner";
//import PropTypes from "prop-types";

export default function AuthorPage() {
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authors || authors.length === 0) {
      dispatch(loadAuthors()).catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [authors, dispatch]);

  console.log("is table rendering once or twice?", authors);
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

      <AuthorTable authors={authors} />
    </>
  );
}
