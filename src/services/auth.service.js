import API from "./api";
import { createConfig } from "./api";

function signUpUser (payload) { 
    return API.post("/signup/user", payload);
}

function signUpServiceProvider (payload) { 
    return API.post("/signup/service-provider", payload);
}

function signIn (payload) {
    return API.post("/signin", payload);
}

function logout (payload, token) {

    const config = createConfig(token);
    return API.post("/logout", payload, config);
}

const authService = {
    signUpUser,
    signUpServiceProvider,
    signIn,
    logout
}

export default authService;