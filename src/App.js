import styled from "styled-components";
import EmailForm from "./forms/EmailForm";
import RecoverForm from "./forms/RecoverForm";
import RegistrationForm from "./forms/RegistrationForm";
import SignInForm from "./forms/SignInForm";
import SubscribeForm from "./forms/SubscribeForm";

import logoTop from "./img/Masteralb.com TOP LOGO.svg";
import logoBottom from "./img/Masteralb.com LOGO.svg";

import { useContext } from "react";

import { AppContext } from "./DataContext";
import UserInfo from "./forms/UserInfo";

const Wrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	@media (max-width: 933px) {
		flex-direction: column;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 5rem;
`;

const Column = styled.div`
	width: 50%;
	margin: 0 5rem;
	@media (max-width: 933px) {
		width: 80%;
	}
`;

const Logo = styled.img`
	margin-top: 5rem;
	width: 100%;
	max-width: 600px;
	height: auto;
`;

const App = () => {
	const { logged, showSubscribeForm } = useContext(AppContext);
	return (
		<Container>
			<Logo src={logoTop} />
			<Wrapper>
				<Column>
					<RegistrationForm />
					<EmailForm />
				</Column>
				<Column>
					{logged ? <UserInfo /> : <SignInForm />}
					<RecoverForm />
					{showSubscribeForm ? <SubscribeForm /> : ""}
					<Logo src={logoBottom} />
				</Column>
			</Wrapper>
		</Container>
	);
};

export default App;
