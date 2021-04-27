import { SIGNUP_SUCCESS } from "../types";
import axios from "axios";

export const signUpUser = (user) => async (dispatch) => {
	try {
		console.log(user);
		// const res = await fetch("http://localhost:5000/api/users", {
		// 	method: "POST",
		// 	body: user,
		// 	// mode: "no-cors",
		// 	header: {
		// 		"Content-Type": "application/json",
		// 	},
		// });
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const res = await axios.post(
			"http://localhost:5000/api/users",
			user,
			config
		);
		console.log(res);

		// dispatch({
		// 	type: SIGNUP_SUCCESS,
		// 	payload: res.data,
		// });
	} catch (err) {
		console.log(err);
	}
};
