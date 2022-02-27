import { API_KEY } from "../secrets";
import { BASE_API_URL } from "../utils/Constants";

export const getPostComments = (postID, pageNumber) => {
    return fetch(`${BASE_API_URL}/post/${postID}/comment?page=` + pageNumber, {
        method: "GET",
        headers: {
            "app-id": API_KEY
        }
    })
        .then((res) => res.json())
};

export const createComment = (postID, owner, message) => {

    return fetch(`${BASE_API_URL}/comment/create`, {
        method: "POST",
        headers: {
            "app-id": API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "message": message,
            "owner": owner,
            "post": postID
        }),
    });


}