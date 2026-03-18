import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, ArrowUpRight, Flag, Users } from "lucide-react";

const TRIP_DATA: Record<string, any> = {
  "1": {
    title: "Alpine Ridge Hike", location: "Interlaken, CH", date: "Apr 12, 2026",
    participants: 5, max: 12, organizer: "Marco B.", tags: ["Hiking", "Nature"],
    description: "A ridge hike through the Swiss Alps with panoramic views. Moderate difficulty.",
    itinerary: ["07:00 — Meet at station", "07:30 — Shuttle", "08:00 — Begin hike", "12:00 — Lunch", "15:00 — Descend"],
    meetingPoint: "Interlaken Ost Station", budget: "€25-40", transport: "Train + Shuttle",
  },
  "2": {
    title: "Coastal Sunset Walk", location: "Algarve, PT", date: "Apr 20, 2026",
    participants: 3, max: 8, organizer: "Sofia L.", tags: ["Beach"],
    description: "Sunset walk along the coast exploring hidden coves and cliffs.",
    itinerary: ["16:00 — Meet at beach", "16:30 — Cliff walk", "18:30 — Sunset", "19:30 — Dinner"],
    meetingPoint: "Benagil Beach", budget: "€15-30", transport: "Car",
  },
  "3": {
    title: "Old Town Discovery", location: "Prague, CZ", date: "May 1, 2026",
    participants: 8, max: 15, organizer: "Lena K.", tags: ["Culture", "City"],
    description: "Explore the historic Old Town of Prague with a local guide.",
    itinerary: ["10:00 — Meet at Old Town Square", "10:30 — Walking tour", "13:00 — Lunch", "15:00 — Free time"],
    meetingPoint: "Old Town Square", budget: "€20-30", transport: "Walking",
  },
  "5": {
    title: "Mountain Trek", location: "Swiss Alps", date: "Jun 10, 2026",
    participants: 4, max: 10, organizer: "Alex Johnson", tags: ["Hiking"],
    description: "An amazing trek through the Swiss Alps with breathtaking views.",
    itinerary: ["Day 1: Meet at Zurich, train to base", "Day 2: Trek to summit", "Day 3: Return"],
    meetingPoint: "Zurich HB Station", budget: "€50-80", transport: "Train + Cable Car",
  },
  "6": {
    title: "City Food Tour", location: "Barcelona, ES", date: "Jun 22, 2026",
    participants: 6, max: 8, organizer: "Alex Johnson", tags: ["Food", "City"],
    description: "A culinary journey through Barcelona's best tapas bars and markets.",
    itinerary: ["11:00 — Meet at La Boqueria", "11:30 — Market tour", "13:00 — Tapas crawl", "16:00 — End at beach"],
    meetingPoint: "La Boqueria Market", budget: "€40-60", transport: "Walking",
  },
};

// Current user (in a real app, this would come from auth context)
const CURRENT_USER = "Alex Johnson";

export function TripDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const trip = TRIP_DATA[id || "1"] || TRIP_DATA["1"];
  const [joined, setJoined] = useState(false);
  
  // Check if current user is the organizer
  const isOrganizer = trip.organizer === CURRENT_USER;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Image placeholder */}
      <div className="h-44 bg-[#CCCCCC] relative flex items-center justify-center text-muted-foreground text-sm">
        [ Cover Image ]
        <button onClick={() => navigate(-1)} className="absolute top-10 left-3 w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-sm">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="absolute top-10 right-3 flex gap-1.5">
          <button className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-xs">
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button 
            onClick={() => navigate(`/trip/${id}/report`)}
            className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-xs"
          >
            <Flag className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        <div>
          <div className="flex gap-1 mb-1">
            {trip.tags.map((t: string) => (
              <span key={t} className="px-1.5 py-0.5 border border-border rounded text-[10px] text-muted-foreground">{t}</span>
            ))}
          </div>
          <h2>{trip.title}</h2>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Location", value: trip.location },
            { label: "Date", value: trip.date },
            { label: "Participants", value: `${trip.participants}/${trip.max}` },
            { label: "Transport", value: trip.transport },
          ].map((item) => (
            <div key={item.label} className="border border-border rounded-md p-2 bg-white">
              <p className="text-[10px] text-muted-foreground">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Organizer */}
        <div className="flex items-center gap-2 border border-border rounded-md p-2 bg-white">
          <div className="w-8 h-8 rounded-full bg-[#DDDDDD] flex items-center justify-center text-xs">{trip.organizer.charAt(0)}</div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Organized by</p>
            <p className="text-sm">{trip.organizer}</p>
          </div>
        </div>

        {/* View Participants Button */}
        <button
          onClick={() => navigate(`/trip/${id}/participants`)}
          className="w-full flex items-center justify-between border border-border rounded-md p-3 bg-white"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#DDDDDD] border-2 border-white flex items-center justify-center text-[10px]">MB</div>
              <div className="w-8 h-8 rounded-full bg-[#CCCCCC] border-2 border-white flex items-center justify-center text-[10px]">LK</div>
              <div className="w-8 h-8 rounded-full bg-[#BBBBBB] border-2 border-white flex items-center justify-center text-[10px]">+3</div>
            </div>
            <span className="text-sm">{trip.participants} participants</span>
          </div>
          <ArrowLeft className="w-4 h-4 rotate-180 text-muted-foreground" />
        </button>

        {/* Description */}
        <div>
          <h4 className="mb-1">About</h4>
          <p className="text-sm text-muted-foreground">{trip.description}</p>
        </div>

        {/* Itinerary */}
        <div>
          <h4 className="mb-1">Itinerary</h4>
          <div className="space-y-1">
            {trip.itinerary.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting point */}
        <div className="border border-border rounded-md p-3 bg-white">
          <p className="text-xs text-muted-foreground">Meeting Point</p>
          <p className="text-sm">{trip.meetingPoint}</p>
          <button className="text-xs text-muted-foreground underline mt-1 flex items-center gap-1">
            Open in Maps
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Budget */}
        <div className="border border-border rounded-md p-3 bg-white">
          <p className="text-xs text-muted-foreground">Budget</p>
          <p className="text-sm">{trip.budget}</p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 px-4 py-3 bg-background border-t border-border">
        <div className="max-w-md mx-auto">
          {isOrganizer ? (
            <button
              onClick={() => navigate(`/trip/${id}/edit`)}
              className="w-full py-3 rounded-md text-sm bg-primary text-white"
            >
              Edit Trip
            </button>
          ) : (
            <button
              onClick={() => setJoined(!joined)}
              className={`w-full py-3 rounded-md text-sm ${
                joined ? "bg-white border border-border text-foreground" : "bg-primary text-white"
              }`}
            >
              {joined ? "Leave Trip" : "Join Trip"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
