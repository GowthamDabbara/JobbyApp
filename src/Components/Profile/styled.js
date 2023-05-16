import styled from "styled-components";

export const Container = styled.div`
	background-image: url("https://assets.ccbp.in/frontend/react-js/profile-bg.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding-left: 15px;
	padding-top: 20px;
	border-radius: 15px;
	width: 250px;
	padding-bottom: 20px;
	@media (max-width: 769px) {
		width: 300px;
	}
`;

export const ProfileImage = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
`;

export const Name = styled.h3`
	margin-top: 0px;
	margin-bottom: 5px;
	padding-left: 5px;
`;

export const Description = styled.p`
	margin: 0;
	margin-top: 10px;
	padding-left: 5px;
	font-size: 14px;
`;

export const LoaderWrapper = styled.div`
	margin-right: 70px;
	margin-top: 50px;
`;

export const Retry = styled.button`
	height: 30px;
	width: 110px;
	background-color: #6366f1;
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: 700;
	cursor: pointer;
	margin-top: 50px;
`;
