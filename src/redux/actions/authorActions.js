import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthorsSucess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function createAuthorSucess(author) {
  return { type: types.CREATE_AUTHOR_SUCCESS, author };
}

export function updateAuthorSucess(author) {
  return { type: types.UPDATE_AUTHOR_SUCCESS, author };
}

export function deleteAuthorSucess(author) {
  return { type: types.DELETE_AUTHOR_SUCCESS, author };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSucess(authors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveAuthors(author) {
  return function (dispatch) {
    console.log("Thunk called with author:", author);
    dispatch(beginApiCall());

    return authorApi
      .saveAuthor(author)
      .then(savedAuthor => {
        console.log("Thunk cnow has the savedAuthor:", savedAuthor);
        author.id
          ? dispatch(updateAuthorSucess(savedAuthor))
          : dispatch(createAuthorSucess(savedAuthor));
      })
      .catch(error => console.error("Thunk error:", error));
  };
}
