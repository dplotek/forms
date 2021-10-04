import React, { useContext, useState } from "react";

import Form from "../components/Form";
import InputContainer, { Input } from "../components/InputContainer";
import SuccessNotification from "../components/SuccessNotification";

import emailIcon from "../img/mail.jpg";
import user from "../img/user.jpg";
import Buttons, { ButtonWrapper } from "../components/Buttons";
import { AppContext } from "../DataContext";

const RecoverForm = () => {
	const { users, showNotification, setShowNotification } =
		useContext(AppContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const getPassword = e => {
		e.preventDefault();
		const user = users.find(user => user.mail === email);

		if (email.length < 1) {
			setErrorMessage("Email cannot be empty");
		} else {
			setErrorMessage("");
			if (user) {
				setPassword(user.password);
				setShowNotification(prevState => ({
					...prevState,
					recover: true,
				}));
				setErrorMessage("");
				setEmail("");
			} else {
				setErrorMessage("User not found");
			}
		}
	};

	return (
		<Form title="Recover Form">
			{showNotification.recover ? (
				<SuccessNotification
					id="recover"
					message={`Your password: ${password}`}
				/>
			) : (
				""
			)}
			<InputContainer icon={emailIcon} errorMessage={errorMessage}>
				<Input
					placeholder="Enter your Email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
			</InputContainer>
			<InputContainer icon={user}>
				<Input placeholder="Enter your Phone number" />
			</InputContainer>
			<ButtonWrapper>
				<Buttons size="small" text="Send" handler={getPassword} />
				<Buttons
					size="small"
					text="Done"
					handler={e => {
						e.preventDefault();
						console.log("Don't know what this should do");
					}}
				/>
			</ButtonWrapper>
		</Form>
	);
};

export default RecoverForm;
