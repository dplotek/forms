import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import checkbox from "../img/check.svg";
import { AppContext } from "../DataContext";

const Notification = styled.div`
	width: 100%;
	height: 100%;
	background-color: green;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const CheckIcon = styled.img`
	width: 80px;
	height: 80px;
`;

const SuccessNotification = ({ message, id }) => {
	const { setShowNotification } = useContext(AppContext);

	useEffect(() => {
		const timeId = setTimeout(() => {
			setShowNotification(prevState => ({
				...prevState,
				[id]: false,
			}));
		}, 3000);
		return () => {
			clearTimeout(timeId);
		};
	});

	return (
		<Notification>
			<CheckIcon src={checkbox} />
			<h4>{message}</h4>
		</Notification>
	);
};

export default SuccessNotification;
