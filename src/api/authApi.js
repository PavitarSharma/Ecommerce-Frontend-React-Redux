import axiosClient from "./axiosClient"

const authAPI = {
    register: async(data) => {
        const url = "/api/v2/registeration"
        return await axiosClient.post(url, data)
    },

    login: async(data) => {
        const url = "/api/v2/login"
        return await axiosClient.post(url, data)
    },

    loadUser: async () => {
        const url = "/api/v2/me"
        return await axiosClient.get(url)
    },

    getAllUser: async (params) => {
		const url = '/users'
		return await axiosClient.get(url, { params })
	},

    updateUser: async (data) => {
		const url = `/api/v2/me/updateUser/info`
		return await axiosClient.put(url, data)
	},

	getUser: async (id) => {
		const url = `/users/${id}`
		return await axiosClient.get(url)
	},

	deleteUser: async (id) => {
		const url = `/users/${id}`
		return await axiosClient.delete(url)
	},

    forgotPassword: async (email) => {
		const url = '/users/forgot-password'
		return await axiosClient.post(url, { email })
	},

	resetPassword: async (id, token) => {
		const url = `/users/password-reset/:${id}/:${token}`
		return await axiosClient.post(url)
	},

	// logout: async () => {
	// 	const url = "/api/v2/logout"
	// 	return await axiosClient.get(url)
	// }
}

export default authAPI