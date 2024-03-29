import { BASE_API_URL } from "../utils/constants";

export const getUser = (userID) => {
    return fetch(BASE_API_URL + "/user/" + userID, {
        method: "GET",
        headers: {
            "app-id": process.env.REACT_APP_API_KEY,
        },
    })
        .then((res) => res.json())
}