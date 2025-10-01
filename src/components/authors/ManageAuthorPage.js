import { newAuthor, newCourse } from "../../../tools/mockData";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors, saveAuthor } from "../../redux/actions/authorActions";
import { loadCourses } from "../../redux/actions/courseActions";
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { saveCourse } from "../../api/courseApi";

export default function ManageAuthorPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [author, setAuthor] = useState(newAuthor);
  const authors = useSelector(state => state.authors);
  const [selectedCourse, setCourse] = useState(newCourse);
  const courses = useSelector(state => state.courses);
  console.log("Courses is:", courses);
  console.log("Selected course for author:", selectedCourse);
  /*const [saving, setSaving] = useState(false);*/
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  /*
  function findAuthorIdByName(name) {
  const existingAuthor = authors.find(a => a.name === name);

  return existingAuthor ? existingAuthor.id : null;
  }
*/
  function handleChange(event) {
    console.log("Changing authors local state... ", authors);
    const { name, value } = event.target;
    setAuthor(prevAuthor => {
      const newAuthor = {
        ...prevAuthor,
        [name]: value
      };
      setCourse(prevC => ({
        ...prevC,
        [name]: name === "courseId" ? parseInt(value, 10) : value,
        authorId: newAuthor.id //where does id come from?
      }));

      return newAuthor; // this is the new author state
    });
  }

  function formIsValid() {
    const { name } = author;
    if (!name) return "Name is required!";
    //if (!courses.id) return "Course is required!";
    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(e) {
    e.preventDefault();
    if (!formIsValid()) return;
      const existingAuthor = authors.find(
    a => a.name.toLowerCase() === author.name.toLowerCase()
  );

  const authorToSave = {
    ...author,
    id: existingAuthor ? existingAuthor.id : author.id
  };

    dispatch(saveAuthor(authorToSave))
      .then(savedAuthor => {
        const courseIsValid =
          selectedCourse && selectedCourse.id && selectedCourse.title?.trim();

        if (courseIsValid) {
          const courseToSave = {
            ...selectedCourse,
            
            authorId: savedAuthor.id
          };
          return dispatch(saveCourse(courseToSave));
        }
      })
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
      courses={courses}
      selectedCourse={selectedCourse}
    />
  );
}
