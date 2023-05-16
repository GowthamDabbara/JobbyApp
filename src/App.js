import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Jobs from "./Components/Jobs";
import JobDetails from "./Components/JobDetails";

function App() {
	return (
		<Routes>
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/" element={<Home />} />
			<Route exact path="/jobs" element={<Jobs />} />
			<Route exact path="/jobs/:id" element={<JobDetails />} />
		</Routes>
	);
}

export default App;
