import { Navigate } from "react-router";
import PrivateLayout from "../layout/PrivateLayout";

const PrivateRoute = ({ component: Component }) => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));

    return isLogin
        ? (
            <PrivateLayout>
                <Component />
            </PrivateLayout>
        )
        : <Navigate to="/login" replace />;
};

export default PrivateRoute;