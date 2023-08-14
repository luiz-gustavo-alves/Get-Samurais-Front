import API from "./api";

function getServices (offset) {

    if (offset === 0) {
        return API.get("/services");

    } else {
        return API.get(`/services?offset=${offset}`);
    }
}

function getServicesByRole (role, offset) {

    if (offset == 0) {
        return API.get(`/services/roles/${role}`);

    } else {
        return API.get(`/services/roles/${role}?offset=${offset}`)
    }
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