import API from "./api";
import { createConfig } from "./api";

function getUserProfile (payload, token) {
    const config = createConfig(token);
    return API.post("/profile/me", payload, config)
}

function getServiceProviderProfile (id) {
    return API.get(`/profile/service-provider/${id}`);
}

const userService = {
    getUserProfile,
    getServiceProviderProfile
}

export default userService;