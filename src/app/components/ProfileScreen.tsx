import { useState } from "react";
import { useNavigate } from "react-router";

export function ProfileScreen() {
  const navigate = useNavigate();
  const [showPastTrips, setShowPastTrips] = useState(true);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h2>Profile</h2>
        <button onClick={() => navigate("/edit-profile")} className="px-3 py-1.5 border border-border rounded-md bg-white text-sm">Edit</button>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center px-4 mb-4">
        <div className="w-20 h-20 rounded-full bg-[#DDDDDD] border border-border flex items-center justify-center text-muted-foreground text-sm mb-2">
          AJ
        </div>
        <h3>Alex Johnson</h3>
        <p className="text-sm text-muted-foreground">Zurich, Switzerland</p>
        <p className="text-xs text-muted-foreground">Software Engineer · 25-34</p>
      </div>

      {/* Bio */}
      <div className="mx-4 border border-border rounded-md bg-white p-3 mb-3">
        <p className="text-sm text-muted-foreground">Passionate hiker and travel enthusiast. Always looking for the next adventure!</p>
        <div className="flex gap-1 mt-2">
          {["Hiking", "Photography", "Camping"].map((h) => (
            <span key={h} className="px-1.5 py-0.5 border border-border rounded text-[10px] text-muted-foreground">{h}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-4 grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Trips", value: "12" },
          { label: "Organized", value: "3" },
          { label: "Countries", value: "5" },
        ].map((s) => (
          <div key={s.label} className="border border-border rounded-md bg-white p-2 text-center">
            <p className="text-lg">{s.value}</p>
            <p className="text-[10px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Past trips toggle */}
      <div className="mx-4 mb-3">
        <button
          onClick={() => setShowPastTrips(!showPastTrips)}
          className="w-full flex items-center justify-between border border-border rounded-md bg-white p-3"
        >
          <span className="text-sm">Show past trips</span>
          <span className="text-xs text-muted-foreground">{showPastTrips ? "ON" : "OFF"}</span>
        </button>
      </div>

      {/* Social */}
      <div className="mx-4 mb-3">
        <p className="text-sm text-muted-foreground mb-1">Social</p>
        <div className="border border-border rounded-md bg-white divide-y divide-border">
          <div className="px-3 py-2 text-sm text-muted-foreground">Instagram: @alexj_travels</div>
          <div className="px-3 py-2 text-sm text-muted-foreground">Twitter: @alexjohnson</div>
        </div>
      </div>

      {/* Actions */}
      <div className="mx-4 space-y-2">
        <button onClick={() => navigate("/login")} className="w-full border border-border rounded-md bg-white p-3 text-left text-sm">
          Log Out
        </button>
        <button className="w-full border border-border rounded-md bg-white p-3 text-left text-sm text-muted-foreground">
          Delete Account
        </button>
      </div>
    </div>
  );
}
