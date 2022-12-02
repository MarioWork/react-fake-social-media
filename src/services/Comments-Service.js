import { BASE_API_URL } from "../utils/constants";

export const getPostComments = (postID, pageNumber) => {
    return fetch(`${BASE_API_URL}/post/${postID}/comment?page=` + pageNumber, {
        method: "GET",
        headers: {
            "app-id": process.env.API_KEY
        }
    })
        .then((res) => res.json())
};

export const createComment = (postID, owner, message) => {

    return fetch(`${BASE_API_URL}/comment/create`, {
        method: "POST",
        headers: {
            "app-id": process.env.API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "message": message,
            "owner": owner,
            "post": postID
        }),
    });


}