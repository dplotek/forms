import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
	width: 100%;
`;
const FormContainer = styled.form`
	background-color: #f4f4f4;
	padding: 1.5rem;
	border-radius: 3px;
	box-shadow: 0px 0px 0px 18px rgba(0, 0, 0, 0.2);
	position: relative;
`;

const Header = styled.h1`
	color: #fff;
	font-family: "Titillium Web", sans-serif;
	text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
	text-align: center;
	margin: 4rem 0 2rem 0;
`;

const Form = ({ children, title, handler }) => {
	return (
		<FormWrapper>
			<Header>{title}</Header>
			<FormContainer onSubmit={handler}>{children}</FormContainer>
		</FormWrapper>
	);
};

export default Form;
