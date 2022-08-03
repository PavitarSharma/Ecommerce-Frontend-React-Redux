import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productAPI from '../../api/productApi';


// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading',
// });

export const getAllProduct = createAsyncThunk(
    "product/getAllProduct",
    async (params, { rejectWithValue }) => {
        try {
            
            return await productAPI.getAllProduct(params)
        }catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (id, { rejectWithValue }) => {
        try {
            console.log(id);
            return await productAPI.getProduct(id)
        }catch (error) {
			return rejectWithValue(error.response)
		}
    }
)

const initialState = {
    product: {},
    products: [],
    status: 'idle',
    error: null
    
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })

            .addCase(getAllProduct.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })

            .addCase(getProduct.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(getProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.product = action.payload
            })
        

		
    },
    
})

export default productSlice.reducer