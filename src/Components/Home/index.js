import React from "react";
import Cookie from "js-cookie";
import { createBrowserHistory } from "history";
import { Navigate } from "react-router-dom";
import Header from "../Header";
import { Container, Title, Para, FindJobsBtn } from "./styled";

const Home = () => {
	const token = Cookie.get("jwt_token");
	if (token === undefined) {
		return <Navigate to="/login" />;
	}
	return (
		<div>
			<Header />
			<Container height={window.innerHeight + "px"}>
				<Title>Find The Job That Fits Your Life</Title>
				<Para>
					Millions of people searching for jobs, salary, information, company
					reviews. Find the job that fits your abilities and potential.
				</Para>
				<FindJobsBtn>Find Jobs</FindJobsBtn>
			</Container>
		</div>
	);
};

export default Home;
