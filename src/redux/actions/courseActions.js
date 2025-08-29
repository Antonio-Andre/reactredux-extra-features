import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";


export function createCourseSucess(courses) {
  return { type: types.CREATE_COURSE_SUCCESS, courses };
}

export function loadCoursesSucess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSucess(courses) {
  return { type: types.UPDATE_COURSES_SUCCESS, courses };
}

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSucess(courses));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourse(course) {

  return function (dispatch) {
    dispatch(beginApiCall());

    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id 
        ? dispatch(updateCourseSucess(savedCourse))
        : dispatch(createCourseSucess(savedCourse))
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}


export function deleteCourse(course) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}
