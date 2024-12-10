import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingBar from "../components/LoadingBar/LoadingBar";

const PrivetRoute = ({ children }) => {
    const { user, isLoader } = useContext(AuthContext)
    const location = useLocation()
    if (user) {
        return children;
    }
    if (isLoader) {
        return <LoadingBar></LoadingBar>
    }

    return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

PrivetRoute.propTypes = {
    children: PropTypes.element.isRequired,
}
export default PrivetRoute;