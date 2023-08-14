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

const userService = {
    getUserProfile,
    getServiceProviderProfile
}

export default userService;