import { useNavigate, useLocation } from "react-router";
import { Home, Compass, PlusCircle, MessageSquare, User } from "lucide-react";

const tabs = [
  { label: "My Trips", path: "/", Icon: Home },
  { label: "Create", path: "/create-trip", Icon: PlusCircle },
  { label: "Discover", path: "/map", Icon: Compass },
  { label: "Messages", path: "/chat", Icon: MessageSquare },
  { label: "Profile", path: "/profile", Icon: User },
];

export function BottomTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="max-w-md mx-auto flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const isActive = tab.path === "/" ? location.pathname === "/" : location.pathname.startsWith(tab.path);
          const Icon = tab.Icon;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center gap-0.5 ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px]">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
