import React from "react";
import styled, { css } from "styled-components";

const ButtonContainer = styled.div`
	width: ${({ size }) =>
		(size === "big" && "100%") ||
		(size === "medium" && "50%") ||
		(size === "small" && "40%")};
`;
export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Button = styled.button`
	height: 3rem;
	border: 1px solid #3a9a00;
	border-radius: 3px;
	font-size: 1rem;
	color: white;
	text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.52);
	font-weight: 400;
	font-size: 1.5rem;
	cursor: pointer;
	width: 100%;
	${props =>
		props.decline ? "background-color: #f55668;" : "background-color: #92cf2b;"}
	${props =>
		props.size === "small" &&
		css`
			font-size: 1.2rem;
		`}
`;

const Buttons = ({ size, decline, text, type, handler }) => {
	return (
		<ButtonContainer size={size}>
			<Button decline={decline} size={size} type={type} onClick={handler}>
				{text}
			</Button>
		</ButtonContainer>
	);
};

export default Buttons;
