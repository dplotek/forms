import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	const [logged, setLogged] = useState(false);
	const [showSubscribeForm, setShowSubscribeForm] = useState(true);
	const [showNotification, setShowNotification] = useState({
		registration: false,
		sendMail: false,
		signIn: false,
		logOut: false,
		recover: false,
		subscribe: false,
	});

	const [loggedData, setLoggedData] = useState([]);

	const addNewUser = user => setUsers(prevState => [...prevState, user]);
	return (
		<AppContext.Provider
			value={{
				users,
				addNewUser,
				logged,
				setLogged,
				showSubscribeForm,
				setShowSubscribeForm,
				showNotification,
				setShowNotification,
				loggedData,
				setLoggedData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
