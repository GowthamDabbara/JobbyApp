import React from "react";
import Header from "../Header";
import Profile from "../Profile";
import SearchOption from "../SearchOption";
import JobCard from "../JobCard";
import { useState, useEffect } from "react";
import {
	MainContainer,
	ContainerOne,
	ContainerTwo,
	MainContainerWrapper,
	Line,
	SearchOptionHeading,
	SearchInput,
} from "./styled";

const Jobs = () => {
	const [searchValue, setSearchValue] = useState("");
	const [jobs, setJobs] = useEffect([]);

	const onEmploymentTypeChange = () => {
		console.log("inside employment change");
	};

	const onSearchInputChange = (e) => {
		setSearchValue(e.target.value);
		console.log(e.target.value);
	};

	const getJobs = async () => {};

	useEffect(() => {
		getJobs();
	}, []);

	return (
		<>
			<Header />
			<MainContainerWrapper height={window.innerHeight - 71 + "px"}>
				<MainContainer>
					<ContainerOne>
						<Profile />
						<Line></Line>
						<SearchOptionHeading>Type of Employment</SearchOptionHeading>
						<SearchOption
							label={"Full Time"}
							callback={onEmploymentTypeChange()}
						/>
						<SearchOption
							label={"Part Time"}
							callback={onEmploymentTypeChange()}
						/>
						<SearchOption
							label={"Freelance"}
							callback={onEmploymentTypeChange()}
						/>
						<SearchOption
							label={"Internship"}
							callback={onEmploymentTypeChange()}
						/>
						<Line></Line>
						<SearchOptionHeading>Salary Range</SearchOptionHeading>
						<SearchOption
							label={"10 LPA and above"}
							callback={onEmploymentTypeChange()}
						/>
						<SearchOption
							label={"20 LPA and above"}
							callback={onEmploymentTypeChange()}
						/>
						<SearchOption
							label={"30 LPA and above"}
							callback={onEmploymentTypeChange()}
						/>
						<SearchOption
							label={"40 LPA and above"}
							callback={onEmploymentTypeChange()}
						/>
					</ContainerOne>
					<ContainerTwo>
						<SearchInput
							value={searchValue}
							type="text"
							placeholder="Search.."
							onChange={(e) => onSearchInputChange(e)}
						/>
						<JobCard />
					</ContainerTwo>
				</MainContainer>
			</MainContainerWrapper>
		</>
	);
};

export default Jobs;
