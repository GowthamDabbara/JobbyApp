import styled from "styled-components";

export const MainContainerWrapper = styled.div`
	background-color: #121212;
	min-height: ${(props) => props.height};
`;

export const MainContainer = styled.div`
	display: flex;
	width: 82%;
	margin: auto;
	padding-top: 20px;
	@media (max-width: 769px) {
		flex-direction: column;
		width: 85%;
	}
`;

export const ContainerOne = styled.div`
	flex: 3;
`;

export const ContainerTwo = styled.div`
	flex: 7;
	padding-bottom: 20px;
	@media (max-width: 769px) {
		padding-top: 20px;
	}
`;

export const Line = styled.div`
	width: 265px;
	margin-top: 20px;
	margin-bottom: 20px;
	border-top: solid;
	border-color: white;
	@media (max-width: 769px) {
		width: 314px;
	}
`;

export const SearchOptionHeading = styled.p`
	color: white;
`;

export const SearchInput = styled.input`
	-webkit-appearance: none;
	height: 30px;
	background: transparent;
	width: 300px;
	border: solid;
	border-width: 0.2px;
	border-radius: 4px;
	padding-left: 10px;
	color: white;
	border-color: white;
	&:active {
		outline: none !important;
		border-color: white;
	}
	&:focus {
		border-color: white;
		outline: none !important;
	}
	@media (max-width: 769px) {
		display: none;
	}
`;

export const SearchInputOne = styled.input`
	display: none;
	-webkit-appearance: none;
	height: 30px;
	background: transparent;
	width: 300px;
	border: solid;
	border-width: 0.2px;
	border-radius: 4px;
	padding-left: 10px;
	color: white;
	border-color: white;
	&:active {
		outline: none !important;
		border-color: white;
	}
	&:focus {
		border-color: white;
		outline: none !important;
	}
	@media (max-width: 769px) {
		display: block;
		margin-bottom: 20px;
	}
`;

export const NoResultsImgWrapper = styled.div`
	margin-top: 80px;
	@media (max-width: 769px) {
		display: flex;
		justify-content: center;
		margin-top: 50px;
	}
`;

export const NoResultsImg = styled.img`
	@media (max-width: 769px) {
		width: 200px;
	}
`;
