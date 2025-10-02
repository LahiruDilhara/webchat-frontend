import { store } from "@/app/store";
import { setLoggedOut } from "@/slices/auth/AuthSlice";
import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus: (status) => {
        return status >= 200 && status < 300;
    }
})


API.interceptors.request.use(
    request => {
        const token = localStorage.getItem("token");
        if (token) {
            if (!request.headers) {
                request.headers = {};
            }
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject({
            message: error.message
        });
    }
)

API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const status = error.response.status;
            if (status === 401) {
                localStorage.removeItem("token");
                store.dispatch(setLoggedOut())
                return Promise.reject({
                    message: error.response.data?.error || "Session expired, please login again",
                });
            }
            return Promise.reject({
                message: error.response.data?.error || "Unknown error"
            });
        }
        return Promise.reject({
            message: "Network error"
        })
    }
)


export default API;