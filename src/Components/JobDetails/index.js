import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import Loader from "react-js-loader";
import Header from "../Header";

const JobDetails = () => {
	const idObj = useParams();
	const [description, setDescription] = useState("");
	const [apiStatus, setApiStatus] = useState("");

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
			setDescription(data.job_details.life_at_company.description);
			console.log(data);
			setApiStatus("SUCCESS");
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
						bgColor={"white"}
						title={"bubble-scale"}
						color={"#121212"}
						size={50}
					/>
				);
			case "SUCCESS":
				return <p>{description}</p>;
			case "FAILED":
				return <p style={{ color: "black" }}>API Failed</p>;
		}
	};

	useEffect(() => {
		getDetails();
	}, []);

	const token = Cookie.get("jwt_token");
	if (token === undefined) {
		return <Navigate to="/login" />;
	}
	return (
		<div>
			<Header />
			{renderSwitch()}
		</div>
	);
};

export default JobDetails;
