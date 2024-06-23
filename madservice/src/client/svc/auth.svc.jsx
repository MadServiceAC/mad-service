import axios from "axios"

const API_URL = "http://localhost:3000/api/auth/"

class AuthService {
    async login(username, password) {
        const response = await axios
            .post(API_URL + "login", {
                username, password
            })
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    }

    logout() {
        localStorage.removeItem("user")
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username, email, password
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

    isLoggedIn() {
        const user = this.getCurrentUser()
        return !!user
    }
 }

 export default new AuthService()