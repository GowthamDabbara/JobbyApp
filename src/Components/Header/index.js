import React from "react";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import {
	HeaderContainer,
	Logo,
	NavContainer,
	LogoutButton,
	Navs,
	NavMobileIcons,
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
		<div style={{ backgroundColor: "#272727", width: "100%" }}>
			<HeaderContainer>
				<div>
					<Link to={"/"}>
						<Logo
							src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
							className="login-website-logo-desktop-image"
							alt="website logo"
						/>
					</Link>
				</div>
				<NavContainer>
					<Link to={"/"} style={{ textDecoration: "none" }}>
						<Navs>Home</Navs>
					</Link>
					<Link to={"/jobs"} style={{ textDecoration: "none" }}>
						<Navs>Jobs</Navs>
					</Link>
				</NavContainer>
				<LogoutButton onClick={logout}>Logout</LogoutButton>
				<NavMobileIcons>
					<IconContext.Provider value={{ size: "25px" }}>
						<div>
							<Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
								<AiFillHome />
							</Link>
						</div>
					</IconContext.Provider>
					<IconContext.Provider value={{ size: "25px" }}>
						<div style={{ paddingLeft: "22px" }}>
							<Link
								to={"/jobs"}
								style={{ textDecoration: "none", color: "white" }}
							>
								<BsFillBriefcaseFill />
							</Link>
						</div>
					</IconContext.Provider>
					<IconContext.Provider value={{ size: "25px" }}>
						<div style={{ paddingLeft: "22px" }}>
							<FiLogOut onClick={logout} />
						</div>
					</IconContext.Provider>
				</NavMobileIcons>
			</HeaderContainer>
		</div>
	);
};

export default Header;
