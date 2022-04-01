import React from "react";
import {
	HeaderContainer,
	Logo,
	NavContainer,
	LogoutButton,
	Navs,
} from "./styled";
import Cookie from "js-cookie";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

const logout = () => {
	Cookie.remove("jwt_token");
	const history = createBrowserHistory();
	history.replace("/login");
	history.go(0);
};

const Header = () => {
	return (
		<HeaderContainer>
			<Link to={"/"}>
				<Logo
					src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
					className="login-website-logo-desktop-image"
					alt="website logo"
				/>
			</Link>
			<NavContainer>
				<Link to={"/"} style={{ textDecoration: "none" }}>
					<Navs>Home</Navs>
				</Link>
				<Link to={"/jobs"} style={{ textDecoration: "none" }}>
					<Navs>Jobs</Navs>
				</Link>
			</NavContainer>
			<LogoutButton onClick={logout}>Logout</LogoutButton>
		</HeaderContainer>
	);
};

export default Header;
