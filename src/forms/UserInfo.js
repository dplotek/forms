import React, { useContext } from "react";
import Buttons from "../components/Buttons";
import Form from "../components/Form";
import SuccessNotification from "../components/SuccessNotification";
import styled from "styled-components";

import { AppContext } from "../DataContext";

const UserData = styled.span`
	font-weight: bold;
`;

const UserInfo = () => {
	const {
		logged,
		setLogged,
		showNotification,
		setShowNotification,
		loggedData,
		setLoggedData,
	} = useContext(AppContext);

	const logout = e => {
		e.preventDefault();
		setLogged(!logged);
		setShowNotification(prevState => ({
			...prevState,
			logOut: true,
		}));
		setLoggedData([]);
	};

	return (
		<Form title="User Info">
			{showNotification.signIn ? (
				<SuccessNotification id="signIn" message="Logged In" />
			) : (
				""
			)}
			<p>
				Username: <UserData>{loggedData.username}</UserData>{" "}
			</p>
			<p>
				Email: <UserData>{loggedData.mail}</UserData>{" "}
			</p>
			<p>
				Country: <UserData>{loggedData.country}</UserData>{" "}
			</p>
			<Buttons text="Log out" size="small" decline handler={logout} />
		</Form>
	);
};

export default UserInfo;
