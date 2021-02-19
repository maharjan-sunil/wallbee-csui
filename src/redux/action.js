import { database } from "../database/config";

export function loadPostFromDatabase() {
  return (dispatch) => {
    return database
      .ref("posts")
      .once("value")
      .then((snapShot) => {
        let posts = [];
        snapShot.forEach((childSnapShot) => {
          posts.push(childSnapShot.val());
        });
        dispatch(loadPost(posts));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addPostToDatabase(post) {
  return (dispatch) => {
    return database
      .ref("posts")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(`error from db ${error}`);
      });
  };
}

export function removePostFromDatabase(index, id) {
  return (dispatch) => {
    return database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removePost(index));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function loadPost(post) {
  return {
    type: "LOAD",
    post,
  };
}

export function addPost(post) {
  return {
    type: "ADD",
    post,
  };
}

export function removePost(index) {
  return {
    type: "REMOVE",
    index,
  };
}
