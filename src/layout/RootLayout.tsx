import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import useViewportWidth from "../hooks/useViewportWidth";
import Footer from "../components/Footer";

function RootLayout() {
  const location = useLocation();
  const viewportWidth = useViewportWidth();

  const shouldRenderSidebar =
    location.pathname !== "/" && location.pathname !== "/components";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <div>
        <NavigationBar />
      </div>

      <div className="container mx-auto flex-grow flex relative">
        {shouldRenderSidebar && viewportWidth !== "sm" && (
          <div className="border-r border-neutral-200">
            <Sidebar />
          </div>
        )}

        <div className="flex-grow">
          <Outlet />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
