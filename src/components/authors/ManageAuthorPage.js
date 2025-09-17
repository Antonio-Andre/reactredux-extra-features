import { newAuthor } from "../../../tools/mockData";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors, saveAuthors } from "../../redux/actions/authorActions";
import { loadCourses } from "../../redux/actions/courseActions";
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export default function ManageAuthorPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [author, setAuthor] = useState(newAuthor);
  const authors = useSelector(state => state.authors);
  console.log(authors);
  const courses = useSelector(state => state.courses);
  /*const [saving, setSaving] = useState(false);*/
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  function handleChange(event) {
     console.log("Changing authors local state... ", authors);
    const { name, value } = event.target;
    setAuthor(prevAuthor => ({
      ...prevAuthor,
      [name]: value
      //[name]: name === "courseId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { name } = author;
    if (!name) return "Name is required!";
    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(e) {
    e.preventDefault();
    console.log("handleSave called");
    if (!formIsValid()) return;

    dispatch(saveAuthors(author))
      .then(() => {
        toast.success("Author saved!");
        navigate("/authors");
      })
      .catch(errors => {
        /*setSaving(false);*/
        setErrors({ onSave: errors.message });
      });
  }

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(loadAuthors()).catch(error => {
        alert("Loading authors failed" + error);
      });
    } else if (id) {
      setAuthor(authors.find(author => author.id == id) || newAuthor);
    }
  }, [authors, id]);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(loadCourses()).catch(error => {
        alert("Loading courses failed" + error);
      });
    }
  }, [courses]);

  if (authors.length === 0) return <Spinner />;
  return (
    <AuthorForm
      author={author}
      onChange={handleChange}
      onSave={handleSave}
      /*saving={saving}*/
      errors={errors}
    />
  );
}
