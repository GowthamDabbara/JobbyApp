import styled from "styled-components";

export const HeaderContainer = styled.div`
	height: 70px;
	width: 85%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow-x: hidden;
`;

export const Logo = styled.img`
	width: 100px;
	height: 30px;
	cursor: pointer;
	@media (max-width: 769px) {
		width: 70px;
		height: 25px;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 769px) {
		display: none;
	}
`;

export const LogoutButton = styled.button`
	height: 30px;
	width: 110px;
	background-color: #6366f1;
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: 700;
	cursor: pointer;
	@media (max-width: 769px) {
		display: none;
	}
`;

export const Navs = styled.p`
	padding-right: 25px;
	color: white;
	cursor: pointer;
`;

export const NavMobileIcons = styled.div`
	display: flex;
	color: white;
	@media (min-width: 769px) {
		display: none;
	}
`;
