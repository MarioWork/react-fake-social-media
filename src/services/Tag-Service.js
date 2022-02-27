import { API_KEY } from '../secrets'
import { BASE_API_URL } from '../utils/Constants'

export const getTags = (abortController) => {
    return fetch(BASE_API_URL + "/tag", {
        method: "GET",
        headers: {
            "app-id": API_KEY,
            signal: abortController.signal
        }
    }).then((res) => res.json())
}