import API from "./api";
import { createConfig } from "./api";

function getCreatedServices (token, offset) {

    const config = createConfig(token);
    if (offset === 0) {
        return API.get("/services/me", config);

    } else {
        return API.get(`/services/me?offset=${offset}`, config);
    }
}

function createService (payload, token) {
    const config = createConfig(token);
    return API.post("/api/services", payload, config);
}

function updateService (payload, id, token) {
    const config = createConfig(token);
    return API.put(`/api/services/${id}`, payload, config);
}

function deleteService (id, token) {
    const config = createConfig(token);
    return API.delete(`/api/services/${id}`, config);
}

const serviceProviderService = {
    getCreatedServices,
    createService,
    updateService,
    deleteService
}

export default serviceProviderService;