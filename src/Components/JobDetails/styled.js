import styled from "styled-components";

export const Container = styled.div`
	margin: auto;
	padding: 20px;
	width: 80%;
	background-color: #272727;
	border-radius: 13px;
	color: white;
`;

export const TitleContainer = styled.div`
	display: flex;
	margin-bottom: 5px;
`;

export const Logo = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

export const Title = styled.h3`
	margin: 0;
	margin-left: 10px;
`;

export const LocationContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const LocoNType = styled.div`
	display: flex;
`;

export const Para = styled.p`
	margin-right: 10px;
	margin-top: 5px;
`;

export const Line = styled.div`
	width: 100%;
	border-top: solid;
	border-color: white;
`;

export const Description = styled.h3`
	margin: 0;
	margin-top: 10px;
`;

export const DescriptionContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SkillsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const SkillInfo = styled.div`
	display: flex;
	align-items: center;
	width: 330px;
	margin-top: 20px;
`;

export const SkillLogo = styled.img`
	margin-right: 10px;
	width: 50px;
	height: 50px;
`;

export const MoreInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	@media (max-width: 769px) {
		flex-direction: column;
	}
`;

export const MoreInfoLogo = styled.img`
	flex: 4;
`;

export const SimilarJobs = styled.h3`
	margin: 0;
	margin-top: 30px;
	color: white;
	margin-left: 9%;
`;

export const SimilarJobsContainer = styled.div`
	margin: auto;
	width: 83%;
	color: white;
	margin-top: 33px;
	display: flex;
	flex-wrap: wrap;
`;
