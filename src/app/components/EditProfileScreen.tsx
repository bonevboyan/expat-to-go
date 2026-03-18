import { useNavigate } from "react-router";
import { ArrowLeft, Camera } from "lucide-react";

export function EditProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-4 pt-4 pb-2 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-sm">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h2>Edit Profile</h2>
      </div>

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-[#DDDDDD] border border-border flex items-center justify-center text-muted-foreground text-sm">AJ</div>
          <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-primary text-white text-[10px] flex items-center justify-center border border-white">
            <Camera className="w-3 h-3" />
          </div>
        </div>
      </div>

      <div className="px-4 space-y-3 pb-20">
        {[
          { label: "Username", value: "alexjohnson" },
          { label: "Email", value: "alex@email.com" },
          { label: "Password", value: "", placeholder: "New password", type: "password" },
          { label: "Country", value: "Switzerland" },
          { label: "City", value: "Zurich" },
          { label: "Occupation", value: "Software Engineer" },
        ].map((field) => (
          <div key={field.label}>
            <p className="text-xs text-muted-foreground mb-0.5">{field.label}</p>
            <input
              className="w-full border border-border rounded-md px-3 py-2.5 bg-white"
              defaultValue={field.value}
              placeholder={field.placeholder || field.label}
              type={field.type || "text"}
            />
          </div>
        ))}

        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Age Range</p>
          <select className="w-full border border-border rounded-md px-3 py-2.5 bg-white" defaultValue="25-34">
            <option>18-24</option>
            <option>25-34</option>
            <option>35-44</option>
            <option>45+</option>
          </select>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Bio</p>
          <textarea className="w-full border border-border rounded-md px-3 py-2.5 bg-white min-h-[60px] resize-none" defaultValue="Passionate hiker and travel enthusiast." />
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Hobbies</p>
          <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" defaultValue="Hiking, Photography, Camping" />
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Social Links</p>
          <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white mb-2" defaultValue="instagram.com/alexj_travels" />
          <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" defaultValue="twitter.com/alexjohnson" />
        </div>
      </div>

      {/* Bottom action button */}
      <div className="fixed bottom-0 left-0 right-0 px-4 py-3 bg-background border-t border-border">
        <div className="max-w-md mx-auto">
          <button onClick={() => navigate(-1)} className="w-full bg-primary text-white py-3 rounded-md text-sm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
