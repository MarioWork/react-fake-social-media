import { API_KEY } from "../secrets";
import { BASE_API_URL } from "../utils/Constants";

export const getAllPosts = (pageNumber, abortController) => {

    return fetch(BASE_API_URL + "/post?page=" + pageNumber, {
        method: "GET",
        headers: {
            "app-id": API_KEY,
        },
        signal: abortController.signal,
    })
        .then((res) => res.json())
}

export const getUserPosts = (userID, abortController, pageNumber) => {
    return fetch(`${BASE_API_URL}/user/${userID}/post?page=${pageNumber}`, {
        method: "GET",
        headers: {
            "app-id": API_KEY,
        },
        signal: abortController.signal,
    })
        .then((res) => res.json())
}


export const updatePost = (post) => {
    return fetch(`${BASE_API_URL}/post/${post.id}`, {
        method: "PUT",
        headers: {
            "app-id": API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
}

