import { Link } from "react-router-dom";
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
		<Link to={`/jobs/${data.id}`} style={{ textDecoration: "none" }}>
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
		</Link>
	);
};

export default JobCard;
