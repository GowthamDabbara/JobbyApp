import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import Header from "../Header";
import Profile from "../Profile";
import SearchOption from "../SearchOption";
import JobCard from "../JobCard";
import Loader from "react-js-loader";
import { useState, useEffect } from "react";
import {
	MainContainer,
	ContainerOne,
	ContainerTwo,
	MainContainerWrapper,
	Line,
	SearchOptionHeading,
	SearchInput,
	NoResultsImg,
	NoResultsImgWrapper,
	SearchInputOne,
} from "./styled";

const employmentTypeObjs = [
	{
		id: 1,
		value: "FULLTIME",
	},
	{
		id: 2,
		value: "PARTTIME",
	},
	{
		id: 3,
		value: "FREELANCE",
	},
	{
		id: 4,
		value: "INTERNSHIP",
	},
];

const salaryTypeObjs = [
	{
		id: 1,
		value: "1000000",
	},
	{
		id: 2,
		value: "2000000",
	},
	{
		id: 3,
		value: "3000000",
	},
	{
		id: 4,
		value: "4000000",
	},
];

const Jobs = () => {
	const [searchValue, setSearchValue] = useState("");
	const [jobs, setJobs] = useState([]);
	const [employmentTypes, setEmploymentTypes] = useState([]);
	const [salaryTypes, setSalaryTypes] = useState([]);
	const [apiStatus, setApiStatus] = useState("");

	const getJobs = async (url) => {
		setApiStatus("LOADING");
		const jwtToken = Cookie.get("jwt_token");
		const options = {
			headers: {
				Authorization: `Bearer ${jwtToken}`,
			},
			method: "GET",
		};
		const res = await fetch(url, options);
		if (res.ok === true) {
			const data = await res.json();
			const updatedData = data.jobs.map((item) => ({
				companyLogoUrl: item.company_logo_url,
				employmentType: item.employment_type,
				id: item.id,
				jobDescription: item.job_description,
				location: item.location,
				packagePerAnnum: item.package_per_annum,
				rating: item.rating,
				title: item.title,
			}));
			setJobs(updatedData);
			if (updatedData.length > 0) {
				setApiStatus("SUCCESS");
			} else {
				setApiStatus("NORESULTS");
			}
			console.log(updatedData);
		} else {
			setApiStatus("FAILED");
		}
	};

	const addEmploymentType = (id) => {
		const currentTypes = employmentTypes;
		const typeToAdd = employmentTypeObjs.filter((item) => {
			if (item.id === id) {
				return item;
			}
		});
		let updatedCurrentTypes = currentTypes;
		updatedCurrentTypes.push(typeToAdd[0].value);
		console.log(updatedCurrentTypes, "adding");
		setEmploymentTypes(updatedCurrentTypes);
		const newUrl = `https://apis.ccbp.in/jobs?employment_type=${updatedCurrentTypes}&minimum_package=${salaryTypes}&search=${searchValue}`;
		getJobs(newUrl);
	};

	const removeEmploymentType = (id) => {
		const currentTypes = employmentTypes;
		var toRemove = "";
		switch (id) {
			case 1:
				toRemove = "FULLTIME";
				break;
			case 2:
				toRemove = "PARTTIME";
				break;
			case 3:
				toRemove = "FREELANCE";
				break;
			case 4:
				toRemove = "INTERNSHIP";
				break;
		}
		const updatedTypes = currentTypes.filter((item) => {
			if (item !== toRemove) {
				return item;
			}
		});
		setEmploymentTypes(updatedTypes);
		const newUrl = `https://apis.ccbp.in/jobs?employment_type=${updatedTypes}&minimum_package=${salaryTypes}&search=${searchValue}`;
		getJobs(newUrl);
	};

	const onEmploymentTypeChange = (id, isChecked) => {
		if (isChecked === true) {
			addEmploymentType(id);
		} else {
			removeEmploymentType(id);
		}
	};

	const addSalaryType = (id) => {
		const typeToAdd = salaryTypeObjs.filter((item) => {
			if (item.id === id) {
				return item;
			}
		});
		let updatedCurrentTypes = typeToAdd[0].value;
		console.log(updatedCurrentTypes, "adding");
		setSalaryTypes(updatedCurrentTypes);
		const newUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentTypes}&minimum_package=${updatedCurrentTypes}&search=${searchValue}`;
		getJobs(newUrl);
	};

	const onSalaryRangeChange = (id, isChecked) => {
		addSalaryType(id);
	};

	const onSearchInputChange = (e) => {
		setSearchValue(e.target.value);
		console.log(e.target.value);
	};

	const onEnter = (e) => {
		if (e.key === "Enter") {
			const url = `https://apis.ccbp.in/jobs?employment_type=${employmentTypes}&minimum_package=${salaryTypes}&search=${searchValue}`;
			getJobs(url);
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
				return jobs.map((item) => <JobCard key={item.id} data={item} />);
			case "FAILED":
				return <div>API Failed</div>;
			case "NORESULTS":
				return (
					<NoResultsImgWrapper>
						<NoResultsImg src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png" />
					</NoResultsImgWrapper>
				);
		}
	};

	useEffect(() => {
		getJobs(
			"https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search="
		);
	}, []);

	const token = Cookie.get("jwt_token");
	if (token === undefined) {
		return <Navigate to="/login" />;
	} else {
	}

	return (
		<>
			<Header />
			<MainContainerWrapper height={window.innerHeight - 71 + "px"}>
				<MainContainer>
					<ContainerOne>
						<SearchInputOne
							value={searchValue}
							type="text"
							placeholder="Search.."
							onChange={(e) => onSearchInputChange(e)}
							onKeyDown={(e) => onEnter(e)}
						/>
						<Profile />
						<Line></Line>
						<SearchOptionHeading>Type of Employment</SearchOptionHeading>
						<SearchOption
							id={1}
							label={"Full Time"}
							callback={onEmploymentTypeChange}
							type="checkbox"
						/>
						<SearchOption
							id={2}
							label={"Part Time"}
							callback={onEmploymentTypeChange}
							type="checkbox"
						/>
						<SearchOption
							id={3}
							label={"Freelance"}
							callback={onEmploymentTypeChange}
							type="checkbox"
						/>
						<SearchOption
							id={4}
							label={"Internship"}
							callback={onEmploymentTypeChange}
							type="checkbox"
						/>
						<Line></Line>
						<SearchOptionHeading>Salary Range</SearchOptionHeading>
						<SearchOption
							id={1}
							label={"10 LPA and above"}
							callback={onSalaryRangeChange}
							type="radio"
						/>
						<SearchOption
							id={2}
							label={"20 LPA and above"}
							callback={onSalaryRangeChange}
							type="radio"
						/>
						<SearchOption
							id={3}
							label={"30 LPA and above"}
							callback={onSalaryRangeChange}
							type="radio"
						/>
						<SearchOption
							id={4}
							label={"40 LPA and above"}
							callback={onSalaryRangeChange}
							type="radio"
						/>
					</ContainerOne>
					<ContainerTwo>
						<SearchInput
							value={searchValue}
							type="text"
							placeholder="Search.."
							onChange={(e) => onSearchInputChange(e)}
							onKeyDown={(e) => onEnter(e)}
						/>
						{renderSwitch()}
					</ContainerTwo>
				</MainContainer>
			</MainContainerWrapper>
		</>
	);
};

export default Jobs;
