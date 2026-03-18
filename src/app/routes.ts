import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LoginScreen } from "./components/LoginScreen";
import { HomeScreen } from "./components/HomeScreen";
import { TripDetailScreen } from "./components/TripDetailScreen";
import { MapScreen } from "./components/MapScreen";
import { FullscreenMapScreen } from "./components/FullscreenMapScreen";
import { CreateTripScreen } from "./components/CreateTripScreen";
import { ChatListScreen } from "./components/ChatListScreen";
import { ChatDetailScreen } from "./components/ChatDetailScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { EditProfileScreen } from "./components/EditProfileScreen";
import { ReportScreen } from "./components/ReportScreen";
import { ParticipantsListScreen } from "./components/ParticipantsListScreen";
import { UserProfileScreen } from "./components/UserProfileScreen";
import { ReportUserScreen } from "./components/ReportUserScreen";
import { EditTripScreen } from "./components/EditTripScreen";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomeScreen },
      { path: "trip/:id", Component: TripDetailScreen },
      { path: "trip/:id/report", Component: ReportScreen },
      { path: "trip/:id/participants", Component: ParticipantsListScreen },
      { path: "trip/:id/edit", Component: EditTripScreen },
      { path: "user/:id", Component: UserProfileScreen },
      { path: "user/:id/report", Component: ReportUserScreen },
      { path: "map", Component: MapScreen },
      { path: "fullscreen-map", Component: FullscreenMapScreen },
      { path: "create-trip", Component: CreateTripScreen },
      { path: "chat", Component: ChatListScreen },
      { path: "chat/:id", Component: ChatDetailScreen },
      { path: "profile", Component: ProfileScreen },
      { path: "edit-profile", Component: EditProfileScreen },
    ],
  },
]);
