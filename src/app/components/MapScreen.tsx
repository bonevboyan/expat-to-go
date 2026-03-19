import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Calendar, Users, MapPin, List } from "lucide-react";

const TRIPS = [
  { id: 1, title: "Alpine Ridge Hike", location: "Interlaken, CH", date: "Apr 12", participants: "5/12", tags: ["Hiking", "Nature"], x: 55, y: 30 },
  { id: 2, title: "Coastal Sunset Walk", location: "Algarve, PT", date: "Apr 20", participants: "3/8", tags: ["Beach"], x: 30, y: 65 },
  { id: 3, title: "Old Town Discovery", location: "Prague, CZ", date: "May 1", participants: "8/15", tags: ["Culture", "City"], x: 65, y: 35 },
  { id: 4, title: "Lakeside Camping", location: "Bavaria, DE", date: "May 15", participants: "2/6", tags: ["Camping"], x: 58, y: 45 },
];

export function MapScreen() {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [showList, setShowList] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
        <button 
          onClick={() => setShowList(!showList)}
          className={`px-3 py-2 rounded-md border text-sm flex items-center gap-2 ${
            showList ? "bg-primary text-white border-primary" : "border-border bg-white"
          }`}
        >
          {showList ? <MapPin className="w-4 h-4" /> : <List className="w-4 h-4" />}
          {showList ? "Map View" : "List View"}
        </button>
      </div>

      {/* Search bar - only show in list view */}
      {showList && (
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
      )}

      {/* Filter panel - absolute positioned overlay */}
      {showFilter && showList && (
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
        {showList ? (
          <>
            {/* Title */}
            <div className="mb-3">
              <h4>Trips to Join</h4>
            </div>

            {/* Trip cards */}
            <div className="space-y-3">
              {TRIPS.map((trip) => (
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
          </>
        ) : (
          <>
            {/* Title */}
            <div className="mb-3">
              <h4>Map View</h4>
            </div>

            {/* Map placeholder */}
            <div className="relative h-[400px] bg-[#E0E0E0] rounded-md overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: "linear-gradient(#CCC 1px, transparent 1px), linear-gradient(90deg, #CCC 1px, transparent 1px)",
                backgroundSize: "30px 30px"
              }} />
              <p className="absolute top-4 left-4 text-xs text-muted-foreground">[ Map View ]</p>

              {TRIPS.map((trip) => (
                <button
                  key={trip.id}
                  onClick={() => navigate(`/trip/${trip.id}`)}
                  className="absolute w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center border-2 border-white shadow-lg hover:bg-primary/90 transition-colors"
                  style={{ left: `${trip.x}%`, top: `${trip.y}%`, transform: "translate(-50%, -50%)" }}
                  title={trip.title}
                >
                  <MapPin className="w-4 h-4" />
                </button>
              ))}
            </div>

            {/* Trip markers legend */}
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Available Trips</p>
              {TRIPS.map((trip) => (
                <button
                  key={trip.id}
                  onClick={() => navigate(`/trip/${trip.id}`)}
                  className="w-full bg-white border border-border rounded-md p-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                      <MapPin className="w-3 h-3" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{trip.title}</p>
                      <p className="text-xs text-muted-foreground">{trip.location}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{trip.date}</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}