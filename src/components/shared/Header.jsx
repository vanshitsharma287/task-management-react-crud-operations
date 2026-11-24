import { useLocation } from "react-router";
import { getPageTitle } from "../../utils/routeUtils";

const Header = () => {
    const location = useLocation();
    const title = getPageTitle(location.pathname);
    return (
        <header className="w-full flex justify-between items-center">
            <h2 className="font-bold text-3xl">{title}</h2>

            <div className="flex justify-center items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-800 flex items-center justify-center text-white font-medium">
                    VS
                </span>
                <strong>Vanshit Sharma</strong>
            </div>
        </header>
    );
};

export default Header;