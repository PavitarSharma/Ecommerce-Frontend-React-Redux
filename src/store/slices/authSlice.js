import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authAPI from '../../api/authApi'

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (data, { rejectWithValue }) => {
        try {
            const response = await authAPI.register(data)

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
                localStorage.setItem('token', JSON.stringify(response.data.token))
            }

            // console.log(response.data.token);

            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)
//load user

export const loadUser = createAsyncThunk(
    "user/loadUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await authAPI.loadUser()
            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }

)
// getUser
export const getUser = createAsyncThunk(
    'user/getUser',
    async (id, { rejectWithValue }) => {
        try {
            const response = await authAPI.getUser(id)
            console.log(response.data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

// getAll Users
export const getAllUser = createAsyncThunk(
    'user/getAllUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await authAPI.getAllUser()
            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

// upadte
export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await authAPI.updateUser(data)

            dispatch(getUser(data._id))

            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

// delete user
export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await authAPI.deleteUser(id)

            dispatch(getAllUser())

            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

// logout
// export const logout = createAsyncThunk(
//     "user/logout",
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await authAPI.logout()
//             return response.data
//         } catch (error) {
//             return rejectWithValue(error.response)
//         }
//     }
// )

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        users: [],
        loading: false,
        success: false,
        error: false,
        token: null,
        message: "",
    },
    reducers: {
        reset: (state) => {
            state.loading = false
            state.success = false
            state.error = false
            state.message = ""
        },
        logout: (state) => {
            localStorage.removeItem("token")
            state.loading = false
            state.token = null
            state.user = null

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
            state.token = action.payload.token
            // state.userToken = action.payload.token
            state.success = true // registration successful
        },
        [login.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = true
            state.user = null
            state.error = payload
        },

        // [logout.fulfilled]: (state, action) => {
        //     state.loading = false
        //     state.token = null
        //     state.user = null
        //     state.error = action.payload.message
        // },

        [loadUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loadUser.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.success = true
        },
        [loadUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = true
            state.user = null
            state.error = payload
        },

        [getUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.success = true
        },
        [getUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = true
            state.user = null
            state.error = payload
        },

        [getAllUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getAllUser.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload.users
            state.success = true
        },
        [getAllUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = true
            state.users = null
            state.error = payload
        },

        [updateUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.success = true
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = true
            state.user = null
            state.error = payload
        },


    }
})

export const { reset, logout } = authSlice.actions
export default authSlice.reducer