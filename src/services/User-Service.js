import { API_KEY } from "../secrets";
import { BASE_API_URL } from "../utils/Constants";

export const getUser = (userID) => {
    return fetch(BASE_API_URL + "/user/" + userID, {
        method: "GET",
        headers: {
            "app-id": API_KEY,
        },
    })
        .then((res) => res.json())
}