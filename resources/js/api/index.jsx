import axios from "axios";

export const backend = "http://localhost:8000/api/";

export const api = axios.create({
    baseURL: backend,
});
