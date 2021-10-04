import styled from "styled-components";
import React from "react";

const MainContainer = styled.div`
	margin: 0;
`;
const Container = styled.div`
	border: 1px solid #c6c6c6;
	border-radius: 3px;
	display: flex;
	background-color: #fff;
	align-items: center;
`;
const ErrorMessage = styled.p`
	color: red;
	font-size: 0.8rem;
	margin: 0.5rem 0;
	height: 0.5rem;
`;
const Icon = styled.img`
	width: auto;
	height: 100%;
	display: flex;
	border-right: 1px solid #c6c6c6;
	padding: 0.2rem 1rem;
	margin: 0.3rem 0;
`;

export const Input = styled.input`
	border: none;
	width: 100%;
	margin: 0 1rem;
	font-size: 1rem;
	&:focus {
		outline: none;
	}
`;

export const TextArea = styled.textarea`
	width: calc(100% - 20px);
	resize: none;
	padding: 10px;
	height: 250px;
	border: 1px solid #c6c6c6;
	border-radius: 3px;
	font-size: 1rem;
	font-family: "Titillium Web", sans-serif;
	line-height: 1.5;
	outline: none;
	margin-bottom: 0.5rem;
`;

export const Select = styled.select`
	color: #000;
	width: 100%;
	height: 40px;
	border: none;
	font-size: 1rem;
	border-radius: 3px;
	padding: 0 1rem;
	&:focus {
		outline: none;
	}
`;

export const SelectContainer = ({
	icon,
	options,
	errorMessage,
	value,
	handler,
}) => {
	const countries = options.map(country => (
		<option key={country}>{country}</option>
	));

	return (
		<MainContainer error={errorMessage}>
			<Container>
				<Icon src={icon} />
				<Select value={value} onChange={handler}>
					{countries}
				</Select>
			</Container>
			<ErrorMessage message={errorMessage}>
				{errorMessage ? errorMessage : "."}
			</ErrorMessage>
		</MainContainer>
	);
};

const InputContainer = ({ icon, children, errorMessage }) => {
	return (
		<MainContainer>
			<Container>
				<Icon src={icon} />
				{children}
			</Container>
			<ErrorMessage>{errorMessage}</ErrorMessage>
		</MainContainer>
	);
};

export default InputContainer;
