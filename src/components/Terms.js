import React from "react";
import styled from "styled-components";

const TermsContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
	margin-right: 15px;
	width: 25px;
	height: 25px;
	&:checked::before {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 15px;
		height: 15px;
		background-color: #92cf2b;
		border: 4px solid white;
		outline: 1px solid black;
		border-radius: 2px;
		content: "";
		font-size: 14px;
		display: flex;
	}
`;

const Label = styled.label`
	color: #787878;
	display: block;
	${({ error }) =>
		error &&
		`
    color: red;
`}
`;

const Terms = ({ text, children, id, error }) => {
	let labelText = "";

	switch (text) {
		case "terms":
			labelText = "I have read and accept the terms of use.";
			break;
		case "copy":
			labelText = "Send a copy to my Email";
			break;
		case "remember":
			labelText = "Remember me";
			break;
		default:
			labelText = "";
	}

	return (
		<TermsContainer>
			{children}
			<Label htmlFor={id} error={error}>
				{labelText}
			</Label>
		</TermsContainer>
	);
};

export default Terms;
