import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Flag, Instagram, Twitter, Globe } from "lucide-react";

const USER_DATA = {
  id: 1,
  name: "Marco B.",
  initials: "MB",
  location: "Milan, Italy",
  occupation: "Photographer",
  ageRange: "25-34",
  bio: "Passionate photographer and travel enthusiast. Love exploring new places and meeting new people!",
  hobbies: ["Photography", "Hiking", "Travel", "Food"],
  trips: 15,
  organized: 8,
  countries: 12,
  socials: {
    instagram: "@marco_travels",
    twitter: "@marcob_photo",
    website: "marcophoto.com",
  },
  pastTrips: [
    { id: 1, title: "Dolomites Trek", date: "Mar 2025", location: "Italy" },
    { id: 2, title: "Swiss Alps Hike", date: "Feb 2025", location: "Switzerland" },
    { id: 3, title: "Portugal Coast", date: "Jan 2025", location: "Portugal" },
  ],
};

export function UserProfileScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate(-1)} 
            className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h2>Profile</h2>
        </div>
        <button 
          onClick={() => navigate(`/user/${id}/report`)}
          className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center"
        >
          <Flag className="w-4 h-4" />
        </button>
      </div>

      {/* Avatar & Info */}
      <div className="flex flex-col items-center px-4 mb-4">
        <div className="w-20 h-20 rounded-full bg-[#DDDDDD] border border-border flex items-center justify-center text-muted-foreground text-lg font-medium mb-2">
          {USER_DATA.initials}
        </div>
        <h3>{USER_DATA.name}</h3>
        <p className="text-sm text-muted-foreground">{USER_DATA.location}</p>
        <p className="text-xs text-muted-foreground">{USER_DATA.occupation} · {USER_DATA.ageRange}</p>
      </div>

      {/* Bio */}
      <div className="mx-4 border border-border rounded-md bg-white p-3 mb-3">
        <p className="text-sm text-muted-foreground">{USER_DATA.bio}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {USER_DATA.hobbies.map((hobby) => (
            <span key={hobby} className="px-1.5 py-0.5 border border-border rounded text-[10px] text-muted-foreground">
              {hobby}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-4 grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Trips", value: USER_DATA.trips },
          { label: "Organized", value: USER_DATA.organized },
          { label: "Countries", value: USER_DATA.countries },
        ].map((stat) => (
          <div key={stat.label} className="border border-border rounded-md bg-white p-2 text-center">
            <p className="text-lg font-medium">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mx-4 mb-3">
        <h4 className="mb-2">Social</h4>
        <div className="border border-border rounded-md bg-white divide-y divide-border">
          {USER_DATA.socials.instagram && (
            <div className="px-3 py-2 flex items-center gap-2">
              <Instagram className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{USER_DATA.socials.instagram}</span>
            </div>
          )}
          {USER_DATA.socials.twitter && (
            <div className="px-3 py-2 flex items-center gap-2">
              <Twitter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{USER_DATA.socials.twitter}</span>
            </div>
          )}
          {USER_DATA.socials.website && (
            <div className="px-3 py-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{USER_DATA.socials.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Past Trips */}
      <div className="mx-4 mb-6">
        <h4 className="mb-2">Past Trips</h4>
        <div className="space-y-2">
          {USER_DATA.pastTrips.map((trip) => (
            <div key={trip.id} className="border border-border rounded-md bg-white p-3">
              <p className="text-sm font-medium">{trip.title}</p>
              <p className="text-xs text-muted-foreground">{trip.location} · {trip.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
