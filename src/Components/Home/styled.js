import styled from "styled-components";

export const Container = styled.div`
	background-image: url("https://assets.ccbp.in/frontend/react-js/home-lg-bg.png");
	height: ${(props) => props.height};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	flex-direction: column;
	padding-top: 130px;
	padding-left: 75px;
	@media (max-width: 769px) {
		background-image: url("https://assets.ccbp.in/frontend/react-js/home-sm-bg.png");
		padding-top: 50px;
		padding-left: 35px;
	}
`;

export const Title = styled.h1`
	font-size: 55px;
	width: 550px;
	margin-bottom: 0px;
	color: #f8fafc;
	@media (max-width: 769px) {
		font-size: 25px;
		width: 90%;
	}
`;

export const Para = styled.p`
	color: white;
	width: 399px;
	@media (max-width: 769px) {
		width: 90%;
	}
`;

export const FindJobsBtn = styled.button`
	width: 84px;
	height: 32px;
	border: none;
	border-radius: 4px;
	font-weight: 700;
	margin-top: 18px;
	color: white;
	background-color: #6366f1;
	cursor: pointer;
`;
