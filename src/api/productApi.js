import axiosClient from "./axiosClient"

const productAPI = {
    getAllProduct: async () => {
        const url = "/api/v2/products"
        return await axiosClient.get(url)
    },

    getProduct: async (id) => {
        const url = `/api/v2/products/${id}`
		return await axiosClient.get(url)
    }
}

export default productAPI