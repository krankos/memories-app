import * as api from "../api";

// Action Creators
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message);
    }

    //const action = { type: "FETCH_ALL", payload: [] };
    //dispatch(action);
};
export const createPost = (newPost) => async(dispatch) => {
    try {
        const { data } = await api.createPost(newPost); // data is the new post

        dispatch({ type: "CREATE_POST", payload: data }); // payload is the new post data (id, title, content)
    } catch (error) {
        console.log(error.message); // "Network Error"
    }
};
export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
        console.log(error);
    }
};