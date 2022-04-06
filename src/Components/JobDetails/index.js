import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import Loader from "react-js-loader";
import Header from "../Header";
import SimilarJobCard from "../SimilarJobCard";
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
	DescriptionContainer,
	SkillsContainer,
	SkillInfo,
	SkillLogo,
	MoreInfoContainer,
	MoreInfoLogo,
	SimilarJobs,
	SimilarJobsContainer,
} from "./styled";

const JobDetails = () => {
	const idObj = useParams();
	const [apiStatus, setApiStatus] = useState("");
	const [data, setData] = useState({
		job_details: {
			id: "",
			skills: [],
			title: "",
			employment_type: "",
			company_logo_url: "",
			location: "",
			package_per_annum: "",
			job_description: "",
			life_at_company: {
				description: "",
				image_url: "",
			},
		},
		similar_jobs: [],
	});

	const getDetails = async () => {
		setApiStatus("LOADING");
		const jwtToken = Cookie.get("jwt_token");
		const url = `https://apis.ccbp.in/jobs/${idObj.id}`;
		const options = {
			headers: {
				Authorization: `Bearer ${jwtToken}`,
			},
			method: "GET",
		};
		const res = await fetch(url, options);
		if (res.ok === true) {
			const data = await res.json();
			console.log(data);
			setApiStatus("SUCCESS");
			setData(data);
		} else {
			setApiStatus("FAILED");
		}
	};

	const renderSwitch = () => {
		switch (apiStatus) {
			case "LOADING":
				return (
					<Loader
						type="bubble-scale"
						bgColor={"black"}
						title={"bubble-scale"}
						color={"black"}
						size={50}
					/>
				);
			case "SUCCESS":
				return (
					<>
						<Container id={data.job_details.id}>
							<TitleContainer>
								<Logo src={data.job_details.company_logo_url} />
								<Title>{data.job_details.title}</Title>
							</TitleContainer>
							<LocationContainer>
								<LocoNType>
									<Para>{data.job_details.location}</Para>
									<Para>{data.job_details.employment_type}</Para>
								</LocoNType>
								<Para>{data.job_details.package_per_annum}</Para>
							</LocationContainer>
							<Line></Line>
							<DescriptionContainer>
								<Description>Description</Description>
								<p>Visit</p>
							</DescriptionContainer>
							<Para>{data.job_details.job_description}</Para>
							<Description>Skills</Description>
							<SkillsContainer>
								{data.job_details.skills.map((item) => {
									return (
										<SkillInfo>
											<SkillLogo src={item.image_url} />
											<Para>{item.name}</Para>
										</SkillInfo>
									);
								})}
							</SkillsContainer>
							<Description>Life at Company</Description>
							<MoreInfoContainer>
								<Para>{data.job_details.life_at_company.description}</Para>
								<MoreInfoLogo
									src={data.job_details.life_at_company.image_url}
								/>
							</MoreInfoContainer>
						</Container>
						<SimilarJobs>Similar Jobs</SimilarJobs>
						<SimilarJobsContainer>
							{data.similar_jobs.map((item) => (
								<SimilarJobCard data={item} />
							))}
						</SimilarJobsContainer>
					</>
				);
			case "FAILED":
				return <p style={{ color: "black" }}>API Failed</p>;
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		getDetails();
	}, []);

	const token = Cookie.get("jwt_token");
	if (token === undefined) {
		return <Navigate to="/login" />;
	}
	return (
		<>
			<Header />
			<div
				style={{
					backgroundColor: "black",
					paddingTop: "40px",
					paddingBottom: "40px",
					minHeight: "900px",
				}}
			>
				{renderSwitch()}
			</div>
		</>
	);
};

export default JobDetails;
