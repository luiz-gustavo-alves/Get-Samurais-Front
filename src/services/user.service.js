import API from "./api";
import { createConfig } from "./api";

function getUserProfile (payload, token) {
    const config = createConfig(token);
    return API.post("/profile/me", payload, config)
}

function getServiceProviderProfile (id, offset) {

    if (offset === 0) {
        return API.get(`/profile/service-provider/${id}`);

    } else {
        return API.get(`/profile/service-provider/${id}?offset=${offset}`);
    }
}

function getServicesByQuery (query, order, offset) {

    if (!order) {
        order = "date";
    }

    if (offset === 0) {
        return API.post(`search-service?query=${query}&order=${order}`);

    } else {
        return API.post(`search-service?query=${query}&order=${order}&offset=${offset}`);
    }
}

const userService = {
    getUserProfile,
    getServiceProviderProfile,
    getServicesByQuery
}

export default userService;