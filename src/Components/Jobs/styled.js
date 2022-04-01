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
`;

export const ContainerOne = styled.div`
	flex: 3;
`;

export const ContainerTwo = styled.div`
	flex: 7;
`;

export const Line = styled.div`
	width: 265px;
	margin-top: 20px;
	margin-bottom: 20px;
	border-top: solid;
	border-color: white;
`;
