import { Navigate } from "react-router";
import PublicLayout from "../layout/PublicLayout";

const PublicRoute = ({ component: Component }) => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));

    return isLogin
        ? <Navigate to="/dashboard" replace />
        : (
            <PublicLayout>
                <Component />
            </PublicLayout>
        );
};

export default PublicRoute;