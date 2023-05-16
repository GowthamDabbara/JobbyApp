import { Navigate, Route } from "react-router-dom";
import Cookie from "js-cookie";

const ProtectedRoute = ({ path, element: Component }) => {
	const token = Cookie.get("jwt_token");
	if (token === undefined) {
		return <Navigate to="/login" />;
	}
	return <Route exact path={path} element={<element />} />;
};

export default ProtectedRoute;
