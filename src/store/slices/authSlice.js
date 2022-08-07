import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authAPI from '../../api/authApi'

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (data, { rejectWithValue }) => {
        try {
            const response = await authAPI.register(data)

            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }

            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await authAPI.login(data)

            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }

            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        loading: false,
        success: false,
        error: false,
        userToken: null,
        message: "",
    },
    reducers: {
        reset: (state) => {
            state.loading = false
            state.success = false
            state.error = false
            state.message = ""
        }
    },

    extraReducers: {

        [signUp.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [signUp.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.success = true // registration successful
        },
        [signUp.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = true
            state.user = null
            state.error = payload
        },

        [login.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.userToken = action.payload.userToken
            state.success = true // registration successful
        },
        [login.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = true
            state.user = null
            state.error = payload
        },


    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer