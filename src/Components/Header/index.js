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

const onJobsClick = async () => {
	<Link to={"/jobs"} />;
	console.log("jobs clicked");
	// const jwtToken = Cookie.get("jwt_token");
	// const options = {
	// 	headers: {
	// 		Authorization: `Bearer ${jwtToken}`,
	// 	},
	// 	method: "GET",
	// };
	// const url = `https://apis.ccbp.in/jobs?employment_type=${[]}&minimum_package=1000000&search=FRO`;
	// const res = await fetch(url, options);
	// const data = await res.json();
	// console.log(data);
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
					<Navs onClick={onJobsClick}>Jobs</Navs>
				</Link>
			</NavContainer>
			<LogoutButton onClick={logout}>Logout</LogoutButton>
		</HeaderContainer>
	);
};

export default Header;
