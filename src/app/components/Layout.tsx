import { Outlet, useLocation } from "react-router";
import { BottomTabs } from "./BottomTabs";

export function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  const hideTabs = 
    pathname === "/login" || 
    pathname === "/fullscreen-map" ||
    pathname.startsWith("/trip/") ||
    pathname.startsWith("/chat/") ||
    pathname.startsWith("/user/") ||
    pathname === "/edit-profile";

  return (
    <div className="max-w-md mx-auto min-h-screen relative bg-background">
      <Outlet />
      {!hideTabs && <BottomTabs />}
    </div>
  );
}
