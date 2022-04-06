import React from "react";
import {
	Container,
	TitleContainer,
	Logo,
	Title,
	LocoNType,
	Para,
	Description,
} from "./styled";

const SimilarJobCard = ({ data }) => {
	return (
		<Container>
			<TitleContainer>
				<Logo src={data.company_logo_url} />
				<Title>{data.title}</Title>
			</TitleContainer>
			<Description>Description</Description>
			<Para>{data.job_description}</Para>
			<LocoNType>
				<Para>{data.location}</Para>
				<Para>{data.employment_type}</Para>
			</LocoNType>
		</Container>
	);
};

export default SimilarJobCard;
