import API from "./api";
import { createConfig } from "./api";

function getServices () {
    return API.get("/services");
}

function getServicesByRole (role) {
    return API.get(`/services/roles/${role}`);
}

function getServiceById (id) {
    return API.get(`/service/${id}`);
}

const serviceService = {
    getServices,
    getServicesByRole,
    getServiceById
}

export default serviceService;