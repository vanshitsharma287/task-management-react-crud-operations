
import { NavLink } from "react-router";
import { privateRoutes } from "../../routes/routeConfig";

const Sidebar = () => {
  return (
    <aside className="text-[#888EA0] bg-[#141E2F] min-h-screen w-60 p-4 md:flex flex-col gap-8  hidden">

      <div className="flex justify-center gap-1 items-center">
        <i className="fa-solid fa-square-check text-purple-600 text-2xl"></i>
        <h2 className="text-xl font-bold">TaskFlow</h2>
      </div>

      <ul className="flex flex-col gap-3 mt-4">
        {privateRoutes.map(item => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `p-5 cursor-pointer flex gap-4 items-center font-medium rounded-xl cursor-pointer ${
                  isActive
                    ? "bg-[#654BE9] text-white"
                    : "hover:bg-[#654BE9] hover:text-white"
                }`
              }
            >
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="w-full p-5 font-medium mt-auto cursor-pointer flex items-center gap-4 rounded-xl hover:bg-[#654BE9] hover:text-white">
        <i className="fa-solid fa-arrow-right"></i>
        Logout
      </button>

    </aside>
  );
};

export default Sidebar;
