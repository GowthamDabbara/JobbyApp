import { useState, useEffect } from "react";
import {
	Container,
	ProfileImage,
	Name,
	Description,
	LoaderWrapper,
	Retry,
} from "./styled";
import Cookie from "js-cookie";
import Loader from "react-js-loader";

const Profile = () => {
	const [imgUrl, setImgUrl] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [apiStatus, setApiStatus] = useState("LOADING");

	const getProfile = async () => {
		const jwtToken = Cookie.get("jwt_token");
		const url = "https://apis.ccbp.in/profile";
		const options = {
			headers: {
				Authorization: `Bearer ${jwtToken}`,
			},
			method: "GET",
		};
		const res = await fetch(url, options);
		if (res.ok === true) {
			const data = await res.json();
			setImgUrl(data.profile_details.profile_image_url);
			setName(data.profile_details.name);
			setDescription(data.profile_details.short_bio);
			setApiStatus("SUCCESS");
		} else {
			setApiStatus("FAILED");
		}
		console.log("succuess");
	};

	useEffect(() => {
		getProfile();
	}, []);

	switch (apiStatus) {
		case "SUCCESS":
			return (
				<Container>
					<ProfileImage src={imgUrl} />
					<Name>{name}</Name>
					<Description>{description}</Description>
				</Container>
			);
		case "LOADING":
			return (
				<LoaderWrapper>
					<Loader
						type="bubble-scale"
						bgColor={"white"}
						title={"bubble-scale"}
						color={"#121212"}
						size={50}
					/>
				</LoaderWrapper>
			);
		case "FAILED":
			return <Retry onClick={getProfile}>Retry</Retry>;
	}
};

export default Profile;
