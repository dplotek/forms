import React, { useContext, useState } from "react";

import Form from "../components/Form";
import InputContainer, { Input, TextArea } from "../components/InputContainer";
import SuccessNotification from "../components/SuccessNotification";
import Buttons from "../components/Buttons";
import Terms, { Checkbox } from "../components/Terms";

import { AppContext } from "../DataContext";

import user from "../img/user.jpg";
import emailIcon from "../img/mail.jpg";

const EmailForm = () => {
	const { showNotification, setShowNotification } = useContext(AppContext);

	const [allInputs, setAllInputs] = useState({
		name: "",
		email: "",
		message: "",
		checked: false,
	});

	const [errorMessages, setErrorMessage] = useState({
		emailMessage: "",
		nameMessage: "",
		textMessage: "",
	});

	const setErrorFor = (input, message) => {
		setErrorMessage(prevState => ({
			...prevState,
			[input]: message,
		}));
	};

	const { name, email, message, checked } = allInputs;

	const handleAllInputs = e => {
		setAllInputs(prevState => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const emailRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	const sendEmail = e => {
		e.preventDefault();
		if (!email.match(emailRegex)) {
			setErrorFor("emailMessage", "Invalid email adress");
			if (name.length < 1) {
				setErrorFor("nameMessage", "Name field cannot be empty");
			} else {
				setErrorFor("nameMessage", "");
			}
		} else if (name.length < 1) {
			setErrorFor("nameMessage", "Name field cannot be empty");
			if (!email.match(emailRegex)) {
				setErrorFor("emailMessage", "Invalid email adress");
			} else {
				setErrorFor("emailMessage", "");
			}
		} else {
			setErrorFor("emailMessage", "");
			setAllInputs({
				name: "",
				email: "",
				message: "",
				checked: false,
			});
			setShowNotification(prevState => ({
				...prevState,
				sendMail: true,
			}));
			setErrorFor("emailMessage", "");
			setErrorFor("nameMessage", "");
		}
	};

	return (
		<Form title="Send Email">
			{showNotification.sendMail ? (
				<SuccessNotification id="sendMail" message="Message sent" />
			) : (
				""
			)}
			<InputContainer
				icon={user}
				type="text"
				placeholder="Your Name"
				errorMessage={errorMessages.nameMessage}
			>
				<Input
					placeholder="Your name"
					id="name"
					value={name}
					onChange={handleAllInputs}
				/>
			</InputContainer>
			<InputContainer
				icon={emailIcon}
				errorMessage={errorMessages.emailMessage}
			>
				<Input
					id="email"
					placeholder="Your email"
					value={email}
					onChange={handleAllInputs}
				/>
			</InputContainer>
			<TextArea
				placeholder="Type your message ..."
				id="message"
				value={message}
				onChange={handleAllInputs}
			/>
			<Terms text="copy" id="mailCopy">
				<Checkbox
					checked={checked}
					onChange={() =>
						setAllInputs(prevState => ({
							...prevState,
							checked: !checked,
						}))
					}
				/>
			</Terms>
			<Buttons text="Send Email" handler={sendEmail} />
		</Form>
	);
};

export default EmailForm;
