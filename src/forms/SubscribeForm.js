import React, { useContext, useState } from "react";

import Form from "../components/Form";
import InputContainer, { Input } from "../components/InputContainer";
import Buttons, { ButtonWrapper } from "../components/Buttons";
import SuccessNotification from "../components/SuccessNotification";

import mail from "../img/mail.jpg";
import { AppContext } from "../DataContext";

const SubscribeForm = () => {
	const {
		showSubscribeForm,
		setShowSubscribeForm,
		showNotification,
		setShowNotification,
	} = useContext(AppContext);

	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const removeForm = e => {
		e.preventDefault();
		setShowSubscribeForm(!showSubscribeForm);
	};

	const subscribeMe = e => {
		e.preventDefault();
		if (
			!email.match(
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			)
		) {
			setErrorMessage("Invalid email");
		} else {
			setShowNotification(prevState => ({
				...prevState,
				subscribe: true,
			}));
			setErrorMessage("");
			setEmail("");
		}
	};

	return (
		<Form title="Subscrbe Form">
			{showNotification.subscribe ? (
				<SuccessNotification id="subscribe" message="Subscribed" />
			) : (
				""
			)}
			<InputContainer
				icon={mail}
				placeholder="Enter your Email"
				type="mail"
				errorMessage={errorMessage}
			>
				<Input
					placeholder="Enter your Email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
			</InputContainer>
			<ButtonWrapper>
				<Buttons text="Subscribe" size="small" handler={subscribeMe} />
				<Buttons text="No, thanks" size="small" decline handler={removeForm} />
			</ButtonWrapper>
		</Form>
	);
};

export default SubscribeForm;
