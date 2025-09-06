import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import AuthorPage from "./AuthorPage";

export default function ManageAuthorPage() {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(loadAuthors());
    }
  }, [authors, dispatch]);

  return <AuthorPage authors={authors} />;
}