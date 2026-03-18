import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Calendar, Users, Map, Heart } from "lucide-react";

const TRIPS = [
  { id: 1, title: "Alpine Ridge Hike", location: "Interlaken, CH", date: "Apr 12", participants: "5/12", tags: ["Hiking", "Nature"] },
  { id: 2, title: "Coastal Sunset Walk", location: "Algarve, PT", date: "Apr 20", participants: "3/8", tags: ["Beach"] },
  { id: 3, title: "Old Town Discovery", location: "Prague, CZ", date: "May 1", participants: "8/15", tags: ["Culture", "City"] },
  { id: 4, title: "Lakeside Camping", location: "Bavaria, DE", date: "May 15", participants: "2/6", tags: ["Camping"] },
];

const FAVORITE_TRIPS = [
  { id: 5, title: "Mountain Trek", location: "Swiss Alps", date: "Jun 10", participants: "4/10", tags: ["Hiking"] },
];

export function MapScreen() {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const displayTrips = showFavorites ? FAVORITE_TRIPS : TRIPS;

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showFilter &&
        filterRef.current &&
        !filterRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilter]);

  return (
    <div className="min-h-screen bg-background pb-20 relative">
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h2>Discover</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => navigate("/fullscreen-map")}
            className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center"
          >
            <Map className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowFavorites(!showFavorites)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center ${
              showFavorites ? "bg-primary text-white border-primary" : "bg-white border-border"
            }`}
          >
            <Heart className={`w-5 h-5 ${showFavorites ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="px-4 flex gap-2 mb-3">
        <input className="flex-1 border border-border rounded-md px-3 py-2 bg-white text-sm" placeholder="Search trips..." />
        <button
          ref={buttonRef}
          onClick={() => setShowFilter(!showFilter)}
          className={`px-3 py-2 rounded-md border text-sm ${showFilter ? "bg-primary text-white border-primary" : "border-border bg-white"}`}
        >
          Filter
        </button>
      </div>

      {/* Filter panel - absolute positioned overlay */}
      {showFilter && (
        <div 
          ref={filterRef}
          className="absolute left-4 right-4 top-[100px] z-30 border border-border rounded-md bg-white p-3 space-y-2 shadow-lg"
        >
          <input className="w-full border border-border rounded px-2 py-1.5 text-sm" placeholder="Min price €" />
          <input className="w-full border border-border rounded px-2 py-1.5 text-sm" placeholder="Max price €" />
          <div className="flex flex-wrap gap-1">
            {["Hiking", "Beach", "Culture", "Camping", "City"].map((t) => (
              <span key={t} className="px-2 py-0.5 border border-border rounded text-xs cursor-pointer">{t}</span>
            ))}
          </div>
          <input className="w-full border border-border rounded px-2 py-1.5 text-sm" placeholder="Date range" />
          <select className="w-full border border-border rounded px-2 py-1.5 text-sm">
            <option>Transport: Any</option>
            <option>Car</option>
            <option>Train</option>
            <option>Bus</option>
          </select>
        </div>
      )}

      {/* Content */}
      <div className="px-4 pt-2">
        {/* Title */}
        <div className="mb-3">
          <h4>{showFavorites ? "Favorites" : "Trips to Join"}</h4>
        </div>

        {/* Trip cards */}
        <div className="space-y-3">
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
    </div>
  );
}
