import axios from 'axios'

const axiosClient = axios.create({
	baseURL: "http://localhost:5000",
	headers: {
		'Content-Type': 'application/json',
	},
	paramsSerializer: (params) => params,
})

axiosClient.interceptors.response.use(
    (response) => {
        if(response && response.data){
            return response.data
        }

        return response
    },
    (error) => {
        throw error
    }
)

export default axiosClient
