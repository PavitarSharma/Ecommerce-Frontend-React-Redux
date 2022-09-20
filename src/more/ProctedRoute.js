import React from 'react'
// import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
// eslint-disable-next-line
// import { useNavigate, Route } from 'react-router-dom'
const ProtectedRoute = (props) => {
	// const { Component } = props
	// eslint-disable-next-line
	//const { loading, user } = useSelector((state) => state.auth.user)
	const token = JSON.parse(localStorage.getItem("token"))
	// const navigate = useNavigate()

	/*useEffect(() => {
		if (!token) {
			<Navigate to='/login'/>
		}

		// if (isAdmin === true && user.role !== "admin") {
		// 	navigate('/login')
		// }
	})*/


	// return (
	// 	<>
	// 		{loading === false && (
	// 			<Route
	// 				{...rest}
	// 				render={(props) => {
	// 					if(token){
	// 						return <Component {...props} />
	// 					}

	// 					if(isAdmin === true && user.role !== "admin"){
	// 						return <Navigate to="/login" />
	// 					}

	// 					return <Navigate to="/login" />
	// 				}}
	// 			/>
	// 		)}

	// 	</>
	// )

	return (
		token ? <Outlet/> : <Navigate to='/login'/>
	  )
	
}

export default ProtectedRoute
