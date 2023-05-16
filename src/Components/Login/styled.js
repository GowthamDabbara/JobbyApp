import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	background-color: #121212;
	height: ${(props) => props.height};
	@media (max-width: 768px) {
		height: ${`${window.innerHeight}px`};
	}
`;

export const Form = styled.form`
	background-color: #272727;
	width: 450px;
	margin: auto;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	@media (max-width: 768px) {
		width: 90%;
		margin: auto;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 10px;
	width: 75%;
`;

export const Logo = styled.img`
	padding-bottom: 30px;
`;

export const InputLabel = styled.label`
	color: #f8fafc;
	padding-bottom: 10px;
	font-size: 12px;
`;

export const UserInpField = styled.input`
	-webkit-appearance: none;
	height: 30px;
	background: transparent;
	border: solid;
	border-width: 0.2px;
	border-radius: 4px;
	padding-left: 10px;
	color: white;
	border-color: #2c364c;
	&:active {
		outline: none !important;
		border-color: #2c364c;
	}
	&:focus {
		border-color: #2c364c;
		outline: none !important;
	}
`;

export const LoginButton = styled.button`
	background-color: #4f46e5;
	border: none;
	width: 75%;
	height: 30px;
	margin-top: 20px;
	color: white;
	border-radius: 4px;
	font-weight: 700;
	cursor: pointer;
`;

export const ErrorMessage = styled.p`
	margin: 0px;
	color: red;
	font-size: 10px;
	padding-top: 5px;
`;
