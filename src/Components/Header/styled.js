import styled from "styled-components";

export const HeaderContainer = styled.div`
	height: 70px;
	background-color: #272727;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const Logo = styled.img`
	margin-right: 300px;
	width: 100px;
	height: 30px;
	cursor: pointer;
`;

export const NavContainer = styled.div`
	display: flex;
	margin-right: 250px;
	justify-content: center;
	align-items: center;
`;

export const LogoutButton = styled.button`
	margin-left: 100px;
	height: 30px;
	width: 110px;
	background-color: #6366f1;
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: 700;
	cursor: pointer;
`;

export const Navs = styled.p`
	padding-right: 25px;
	color: white;
	cursor: pointer;
`;
