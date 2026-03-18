import { useNavigate } from "react-router";
import { MapPin } from "lucide-react";

const MARKERS = [
  { id: 1, name: "Alpine Ridge Hike", x: 55, y: 30 },
  { id: 2, name: "Coastal Sunset Walk", x: 30, y: 65 },
  { id: 3, name: "Old Town Discovery", x: 65, y: 35 },
  { id: 4, name: "Lakeside Camping", x: 58, y: 45 },
];

export function FullscreenMapScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 px-4 pt-4 pb-2 flex items-center justify-between">
        <h2 className="text-white drop-shadow-md">Map</h2>
        <button 
          onClick={() => navigate(-1)}
          className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-sm"
        >
          ✕
        </button>
      </div>

      {/* Map placeholder */}
      <div className="absolute inset-0 bg-[#E0E0E0]">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "linear-gradient(#CCC 1px, transparent 1px), linear-gradient(90deg, #CCC 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }} />
        <p className="absolute top-24 left-4 text-xs text-muted-foreground">[ Map View ]</p>

        {MARKERS.map((m) => (
          <button
            key={m.id}
            onClick={() => navigate(`/trip/${m.id}`)}
            className="absolute w-6 h-6 rounded-full bg-primary text-white text-[10px] flex items-center justify-center border border-white"
            style={{ left: `${m.x}%`, top: `${m.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <MapPin className="w-3 h-3" />
          </button>
        ))}
      </div>
    </div>
  );
}
