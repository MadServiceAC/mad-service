import axios from "axios"
import authHeader from "./auth-header"

const API_URL = 'http://localhost:3000/api/'

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all')
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', {headers: authHeader()})
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', {headers: authHeader()})
    }

    getTechnicianBoard() {
        return axios.get(API_URL + 'technician', {headers: authHeader()})
    }

    getSellerBoard() {
        return axios.get(API_URL + 'seller', {headers: authHeader()})
    }
    updateUser(id, data) {
        return axios.put(API_URL + `users/${id}`, data, {headers: authHeader()})
    }
    getUser(id) {
        return axios.get(API_URL + `users/${id}`, {headers: authHeader()})
    }
}

export default new UserService()