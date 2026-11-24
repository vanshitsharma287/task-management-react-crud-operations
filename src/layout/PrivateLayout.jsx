
import Header from "../components/shared/Header";
import Sidebar from "../components/shared/SideBar";

const PrivateLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex flex-1 flex-col min-w-0 p-3">
        <Header />

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
