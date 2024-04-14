import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
function Layout() {
  return (
    <div className="wrapper">
      <Sidebar/>
      <div className="w-90">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
