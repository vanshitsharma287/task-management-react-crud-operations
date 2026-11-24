import { BrowserRouter, Routes as RoutesWrapper, Route, Navigate } from "react-router";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./publicRoute";
import { publicRoutes, privateRoutes } from "./routeConfig";

const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesWrapper>

                {/* Public Routes */}
                {publicRoutes.map(route => (
                    <Route
                        key={route.to}
                        path={route.to}
                        element={<PublicRoute component={route.component} />}
                    />
                ))}

                {/* Private Routes */}
                {privateRoutes.map(route => (
                    <Route
                        key={route.to}
                        path={route.to}
                        element={<PrivateRoute component={route.component} />}
                    />
                ))}

                <Route path="/" element={<Navigate to="/login" />}  />
                <Route path="*" element={<h1>Not Found</h1>}  />

            </RoutesWrapper>
        </BrowserRouter>
    );
};

export default Routes;