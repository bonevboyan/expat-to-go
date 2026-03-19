import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar, Users, Heart } from "lucide-react";

const CREATED_TRIPS = [
  { id: 5, title: "Mountain Trek", location: "Swiss Alps", date: "Jun 10", participants: "4/10", tags: ["Hiking"] },
  { id: 6, title: "City Food Tour", location: "Barcelona, ES", date: "Jun 22", participants: "6/8", tags: ["Food", "City"] },
];

const JOINED_TRIPS = [
  { id: 1, title: "Alpine Ridge Hike", location: "Interlaken, CH", date: "Apr 12", participants: "5/12", tags: ["Hiking", "Nature"] },
  { id: 3, title: "Old Town Discovery", location: "Prague, CZ", date: "May 1", participants: "8/15", tags: ["Culture", "City"] },
];

const FAVORITE_TRIPS = [
  { id: 7, title: "Mountain Trek", location: "Swiss Alps", date: "Jun 10", participants: "4/10", tags: ["Hiking"] },
];

export function HomeScreen() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"created" | "joined" | "favorites">("created");

  const displayTrips = tab === "created" ? CREATED_TRIPS : tab === "joined" ? JOINED_TRIPS : FAVORITE_TRIPS;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-4 pb-2">
        <h2>My Trips</h2>
      </div>

      {/* Tabs */}
      <div className="px-4 flex gap-2 mb-3">
        {(["created", "joined", "favorites"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-md text-sm border capitalize flex items-center justify-center gap-1 ${
              tab === t ? "bg-primary text-white border-primary" : "border-border bg-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Trip cards */}
      <div className="px-4 space-y-3">
        {displayTrips.map((trip) => (
          <button
            key={trip.id}
            onClick={() => navigate(`/trip/${trip.id}`)}
            className="w-full bg-white border border-border rounded-md overflow-hidden text-left"
          >
            {/* Image placeholder */}
            <div className="h-28 bg-[#DDDDDD] flex items-center justify-center text-muted-foreground text-xs">
              [ Image ]
            </div>
            <div className="p-3">
              <p className="text-sm">{trip.title}</p>
              <p className="text-xs text-muted-foreground">{trip.location}</p>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {trip.date}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {trip.participants}
                </span>
              </div>
              <div className="flex gap-1 mt-2">
                {trip.tags.map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 border border-border rounded text-[10px] text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
