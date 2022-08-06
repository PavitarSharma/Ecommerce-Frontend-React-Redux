import axiosClient from "./axiosClient"

const authAPI = {
    register: async(data) => {
        const url = "/api/v2/registeration"
        return await axiosClient.post(url, data)
    },

    login: async(data) => {
        const url = "/api/v2/login"
        return await axiosClient.post(url, data)
    }
}

export default authAPI