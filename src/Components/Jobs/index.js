import React from "react";
import Header from "../Header";
import Profile from "../Profile";
import SearchOption from "../SearchOption";
import {
	MainContainer,
	ContainerOne,
	ContainerTwo,
	MainContainerWrapper,
	Line,
} from "./styled";

const onEmploymentTypeChange = () => {
	console.log("inside employment change");
};

const Jobs = () => {
	return (
		<>
			<Header />
			<MainContainerWrapper height={window.innerHeight - 71 + "px"}>
				<MainContainer>
					<ContainerOne>
						<Profile />
						<Line></Line>
						<SearchOption label={"Hello"} callback={onEmploymentTypeChange()} />
					</ContainerOne>
					<ContainerTwo>two</ContainerTwo>
				</MainContainer>
			</MainContainerWrapper>
		</>
	);
};

export default Jobs;
