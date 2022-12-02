
import { BASE_API_URL } from "../utils/constants";

export const getAllPosts = (pageNumber, abortController) => {

    return fetch(BASE_API_URL + "/post?page=" + pageNumber, {
        method: "GET",
        headers: {
            "app-id": process.env.REACT_APP_API_KEY,
        },
        signal: abortController.signal,
    })
        .then((res) => res.json())
}

export const getUserPosts = (userID, abortController, pageNumber) => {
    return fetch(`${BASE_API_URL}/user/${userID}/post?page=${pageNumber}`, {
        method: "GET",
        headers: {
            "app-id": process.env.REACT_APP_API_KEY,
        },
        signal: abortController.signal,
    })
        .then((res) => res.json())
}


export const updatePost = (post) => {
    return fetch(`${BASE_API_URL}/post/${post.id}`, {
        method: "PUT",
        headers: {
            "app-id": process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
}

