import React, { useState, useContext } from "react";
import { AppContext } from "../DataContext";

import SuccessNotification from "../components/SuccessNotification";
import Form from "../components/Form";
import InputContainer, { Input } from "../components/InputContainer";
import Buttons, { ButtonWrapper } from "../components/Buttons";
import Terms, { Checkbox } from "../components/Terms";

import user from "../img/user.jpg";
import passwordIcon from "../img/password.jpg";

const SignInForm = () => {
	const [allData, setAllData] = useState({
		username: "",
		password: "",
	});

	const handleInput = e => {
		setAllData(prevState => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const [errorMessages, setErrorMessage] = useState({
		username: "",
		password: "",
	});

	const setErrorFor = (input, message) => {
		setErrorMessage(prevState => ({
			...prevState,
			[input]: message,
		}));
	};

	const {
		users,
		setLogged,
		showNotification,
		setShowNotification,
		setLoggedData,
	} = useContext(AppContext);

	const logIn = e => {
		e.preventDefault();

		const user = users.find(user => user.username === allData.username);

		if (user) {
			if (user.password === allData.password) {
				setLogged(true);
				setErrorFor("username", "");
				setErrorFor("password", "");
				setLoggedData(user);
			} else {
				setErrorFor("password", "Wrong password");
				setErrorFor("username", "");
			}
		} else {
			setErrorFor("username", "Wrong username");
		}

		setShowNotification(prevState => ({
			...prevState,
			signIn: true,
		}));
	};

	return (
		<Form title="Sign In Form">
			{showNotification.logOut ? (
				<SuccessNotification id="logOut" message="Logged out" />
			) : (
				""
			)}
			<InputContainer icon={user} errorMessage={errorMessages.username}>
				<Input
					id="username"
					placeholder="Username"
					type="text"
					value={allData.username}
					onChange={handleInput}
				/>
			</InputContainer>
			<InputContainer icon={passwordIcon} errorMessage={errorMessages.password}>
				<Input
					id="password"
					placeholder="Password"
					type="password"
					value={allData.password}
					onChange={handleInput}
				/>
			</InputContainer>
			<ButtonWrapper>
				<Terms text="remember" id="remember">
					<Checkbox />
				</Terms>
				<Buttons text="Sign In" size="small" small handler={logIn} />
			</ButtonWrapper>
		</Form>
	);
};

export default SignInForm;
