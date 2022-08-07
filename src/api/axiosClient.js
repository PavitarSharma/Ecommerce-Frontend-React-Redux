import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "https://ecommerce--webapp.herokuapp.com",
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: (params) => params,
})

axiosClient.interceptors.request.use(async (config) => {
	const token = localStorage.getItem('token')
	const auth = token ? `Bearer ${token}` : ''
	config.headers.common['Authorization'] = auth

	return config
})

/*axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }

        return response
    },
    (error) => {
        throw error
    }
)*/

export default axiosClient
