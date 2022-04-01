import React from "react";
import {
	Container,
	TitleContainer,
	Logo,
	Title,
	LocationContainer,
	LocoNType,
	Para,
	Line,
	Description,
} from "./styled";

const JobCard = ({ data }) => {
	return (
		<Container id={data.id}>
			<TitleContainer>
				<Logo src={data.companyLogoUrl} />
				<Title>{data.title}</Title>
			</TitleContainer>
			<LocationContainer>
				<LocoNType>
					<Para>{data.location}</Para>
					<Para>{data.employmentType}</Para>
				</LocoNType>
				<Para>{data.packagePerAnnum}</Para>
			</LocationContainer>
			<Line></Line>
			<Description>Description</Description>
			<Para>{data.jobDescription}</Para>
		</Container>
	);
};

export default JobCard;
