import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Users } from "lucide-react";

const PARTICIPANTS = [
  { id: 1, name: "Marco B.", initials: "MB", role: "Organizer", joined: "2 days ago" },
  { id: 2, name: "Lena K.", initials: "LK", role: "Participant", joined: "1 day ago" },
  { id: 3, name: "Alex Johnson", initials: "AJ", role: "Participant", joined: "5 hours ago" },
  { id: 4, name: "Sarah M.", initials: "SM", role: "Participant", joined: "3 hours ago" },
  { id: 5, name: "John D.", initials: "JD", role: "Participant", joined: "1 hour ago" },
];

export function ParticipantsListScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background pb-4">
      <div className="px-4 pt-4 pb-2 flex items-center gap-2">
        <button 
          onClick={() => navigate(-1)} 
          className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <h2>Participants</h2>
        </div>
      </div>

      <div className="px-4 space-y-2">
        {PARTICIPANTS.map((participant) => (
          <button
            key={participant.id}
            onClick={() => navigate(`/user/${participant.id}`)}
            className="w-full flex items-center gap-3 bg-white border border-border rounded-md p-3 text-left"
          >
            <div className="w-12 h-12 rounded-full bg-[#DDDDDD] flex items-center justify-center text-sm font-medium">
              {participant.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{participant.name}</p>
                {participant.role === "Organizer" && (
                  <span className="px-1.5 py-0.5 bg-primary text-white text-[10px] rounded">
                    {participant.role}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">Joined {participant.joined}</p>
            </div>
            <ArrowLeft className="w-4 h-4 rotate-180 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
}
