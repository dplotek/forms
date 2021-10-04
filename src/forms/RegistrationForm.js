import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import InputContainer, { Input, Select } from "../components/InputContainer";
import Form from "../components/Form";
import Buttons, { ButtonWrapper } from "../components/Buttons";
import Terms, { Checkbox } from "../components/Terms";
import SuccessNotification from "../components/SuccessNotification";

import userIcon from "../img/user.jpg";
import passwordIcon from "../img/password.jpg";
import mailIcon from "../img/mail.jpg";
import locationIcon from "../img/location.jpg";

import { AppContext } from "../DataContext";

const RegistrationForm = () => {
	const { users, addNewUser, showNotification, setShowNotification } =
		useContext(AppContext);

	const countries = ["Poland", "Germany", "USA", "Netherlands", "Other"];

	const {
		register,
		handleSubmit,
		watch,
		reset,
		getValues,
		formState: { errors },
	} = useForm({});

	const password = useRef();
	password.current = watch("password");

	const [usernameError, SetUsernameError] = useState();
	const [mailError, SetMailError] = useState();

	const registerUser = user => {
		const usernameRefValue = getValues("username");
		const userDuplication = users.find(
			user => user.username === usernameRefValue,
		);

		const mailRefValue = getValues("mail");
		const mailDuplication = users.find(user => user.mail === mailRefValue);

		if (userDuplication !== undefined) {
			SetUsernameError("Username already exist");
		} else if (mailDuplication !== undefined) {
			SetMailError("Email already exist");
			SetUsernameError("");
		} else {
			addNewUser(user);
			reset();
			setShowNotification(prevState => ({
				...prevState,
				registration: true,
			}));
			SetUsernameError("");
			SetMailError("");
		}
	};

	return (
		<Form title="Registration Form" handler={handleSubmit(registerUser)}>
			{showNotification.registration ? (
				<SuccessNotification id="registration" message="Account created" />
			) : (
				""
			)}
			<InputContainer
				icon={userIcon}
				errorMessage={errors.username?.message || usernameError}
			>
				<Input
					placeholder="Username"
					{...register("username", {
						required: "This field is required",
						pattern: {
							value: /^[a-z0-9_-]{3,16}$/,
							message: "Wrong username",
						},
					})}
				/>
			</InputContainer>

			<InputContainer
				icon={passwordIcon}
				errorMessage={errors.password?.message}
			>
				<Input
					type="password"
					ref={password}
					placeholder="Password"
					{...register("password", {
						required: "This field is required",
						pattern: {
							value: /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
							message: "At least 1 digit, 1 uppercase, 8 characters",
						},
					})}
				/>
			</InputContainer>

			<InputContainer
				icon={passwordIcon}
				errorMessage={errors.confirmPassword?.message}
			>
				<Input
					type="password"
					placeholder="Confirm Password"
					{...register("confirmPassword", {
						required: "This field is required",
						validate: value =>
							value === password.current || "The passwords do not match",
					})}
				/>
			</InputContainer>

			<InputContainer
				icon={mailIcon}
				errorMessage={errors.mail?.message || mailError}
			>
				<Input
					placeholder="Email"
					{...register("mail", {
						required: "This field is required",
						pattern: {
							value:
								/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							message: "Wrong Email",
						},
					})}
				/>
			</InputContainer>

			<InputContainer icon={locationIcon}>
				<Select {...register("country")}>
					{countries.map(country => (
						<option key={country}>{country}</option>
					))}
				</Select>
			</InputContainer>

			<Terms id="terms" text="terms" error={errors.terms?.message}>
				<Checkbox
					{...register("terms", {
						required: "This field is required",
					})}
				/>
			</Terms>

			<ButtonWrapper>
				<Buttons text="Sign in" size="big" type="submit" />
			</ButtonWrapper>
		</Form>
	);
};

export default RegistrationForm;
