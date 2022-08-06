import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authAPI from '../../api/authApi'

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (data, { rejectWithValue }) => {
        try {
            const result = await authAPI.register(data)

            return result
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            return await authAPI.login(data)
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        status: 'idle',
        error: null,
        userToken: null
    },
    reducers: {},

    extraReducers: {

        [signUp.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [signUp.fulfilled]: (state, action) => {
            state.loading = false
            state.success = action.payload.user // registration successful
        },
        [signUp.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },


    }
})

export default authSlice.reducer