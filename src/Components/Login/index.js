import Cookies from "js-cookie";
import { createBrowserHistory } from "history";
import { Navigate } from "react-router-dom";

import { Component, useState } from "react";
import {
	Container,
	Form,
	InputContainer,
	Logo,
	InputLabel,
	UserInpField,
	LoginButton,
	ErrorMessage,
} from "./styled";

class Login extends Component {
	state = {
		username: "",
		password: "",
		showError: false,
	};

	onChangeUsername = (event) => {
		this.setState({ username: event.target.value });
	};
	onChangePassword = (event) => {
		this.setState({ password: event.target.value });
	};

	onSubmitSuccess = (jwtToken) => {
		console.log("jwtToken");
		const history = createBrowserHistory();
		Cookies.set("jwt_token", jwtToken, {
			expires: 15,
			path: "/",
		});
		history.replace("/");
		history.go(0);
	};

	onSubmitFailure = (errorMsg) => {
		console.log(errorMsg);
		this.setState({ showError: true });
	};

	submitForm = async (event) => {
		event.preventDefault();
		const { username, password } = this.state;
		const userDetails = { username, password };
		const url = "https://apis.ccbp.in/login";
		const options = {
			method: "POST",
			body: JSON.stringify(userDetails),
		};
		const response = await fetch(url, options);
		const data = await response.json();
		if (response.ok === true) {
			this.onSubmitSuccess(data.jwt_token);
			console.log(data.jwt_token);
		} else {
			this.onSubmitFailure(data.error_msg);
		}
	};

	renderUsernameField = () => {
		const { username } = this.state;
		return (
			<>
				<InputLabel className="input-label" htmlFor="username">
					USERNAME
				</InputLabel>
				<UserInpField
					type="text"
					id="username"
					placeholder="Username"
					value={username}
					onChange={this.onChangeUsername}
				/>
			</>
		);
	};

	renderPasswordField = () => {
		const { password } = this.state;
		return (
			<>
				<InputLabel className="input-label" htmlFor="password">
					PASSWORD
				</InputLabel>
				<UserInpField
					type="password"
					id="password"
					placeholder="Password"
					value={password}
					onChange={this.onChangePassword}
				/>
			</>
		);
	};

	render() {
		const { showError } = this.state;
		const jwtToken = Cookies.get("jwt_token");
		console.log(jwtToken);
		if (jwtToken !== undefined) {
			return <Navigate to="/" />;
		}
		return (
			<Container height={window.innerHeight - 1 + "px"}>
				<Form onSubmit={this.submitForm}>
					<Logo
						src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
						className="login-website-logo-desktop-image"
						alt="website logo"
					/>
					<InputContainer>{this.renderUsernameField()}</InputContainer>
					<InputContainer>
						{this.renderPasswordField()}
						{showError && (
							<ErrorMessage>*Username and password didn't match</ErrorMessage>
						)}
					</InputContainer>
					<LoginButton type="submit">Login</LoginButton>
				</Form>
			</Container>
		);
	}
}

// const Login = () => {
// 	const [username, setUsername] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [showError, setShowError] = useState(false);

// 	const onChangeUsername = (event) => {
// 		setUsername(event.target.value);
// 	};
// 	const onChangePassword = (event) => {
// 		setPassword(event.target.value);
// 	};

// 	const onSubmitSuccess = (jwtToken) => {
// 		const { history } = this.props;

// 		Cookies.set("jwt_token", jwtToken, {
// 			expires: 30,
// 			path: "/",
// 		});
// 		history.replace("/");
// 	};

// 	const onSubmitFailure = (errorMsg) => {
// 		console.log(errorMsg);
// 		this.setState({ showSubmitError: true, errorMsg });
// 	};

// 	const submitForm = async (event) => {
// 		event.preventDefault();
// 		const userDetails = { username, password };
// 		const url = "https://apis.ccbp.in/login";
// 		const options = {
// 			method: "POST",
// 			body: JSON.stringify(userDetails),
// 		};
// 		const response = await fetch(url, options);
// 		const data = await response.json();
// 		if (response.ok === true) {
// 			onSubmitSuccess(data.jwt_token);
// 		} else {
// 			onSubmitFailure(data.error_msg);
// 		}
// 	};

// 	const renderUsernameField = () => {
// 		return (
// 			<>
// 				<InputLabel className="input-label" htmlFor="username">
// 					USERNAME
// 				</InputLabel>
// 				<UserInpField
// 					type="text"
// 					id="username"
// 					placeholder="Username"
// 					value={username}
// 					onChange={(e) => onChangeUsername(e)}
// 				/>
// 			</>
// 		);
// 	};

// 	const renderPasswordField = () => {
// 		return (
// 			<>
// 				<InputLabel className="input-label" htmlFor="password">
// 					PASSWORD
// 				</InputLabel>
// 				<UserInpField
// 					type="password"
// 					id="password"
// 					placeholder="Password"
// 					value={password}
// 					onChange={(e) => onChangePassword(e)}
// 				/>
// 			</>
// 		);
// 	};

// 	const jwtToken = Cookies.get("jwt_token");
// 	if (jwtToken !== undefined) {
// 		return <Redirect to="/" />;
// 	}
// 	return (
// 		<Container height={window.innerHeight - 1 + "px"}>
// 			<Form onSubmit={(e) => submitForm(e)}>
// 				<Logo
// 					src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
// 					className="login-website-logo-desktop-image"
// 					alt="website logo"
// 				/>
// 				<InputContainer>{renderUsernameField()}</InputContainer>
// 				<InputContainer>
// 					{renderPasswordField()}
// 					{showError && (
// 						<ErrorMessage>*Username and password didn't match</ErrorMessage>
// 					)}
// 				</InputContainer>
// 				<LoginButton type="submit">Login</LoginButton>
// 			</Form>
// 		</Container>
// 	);
// };

export default Login;
