import { API_KEY } from "../secrets";

export const getAllPosts = (pageNumber) => {
    return fetch("https://dummyapi.io/data/v1/post?page=" + pageNumber, {
        method: "GET",
        headers: {
            "app-id": API_KEY,
        },
    })
        .then((res) => res.json())
        .then((data) => { return data });
}



