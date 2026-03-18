import { useState } from "react";
import { useNavigate } from "react-router";

export function LoginScreen() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col px-6 pt-8 pb-8">
      {/* Logo placeholder */}
      <div className="w-16 h-16 bg-[#CCCCCC] rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-xs">Logo</div>
      <p className="text-center text-muted-foreground text-sm mb-8">ExpatToGo</p>

      <h2 className="mb-6">{isRegister ? "Register" : "Log In"}</h2>

      <div className="space-y-3">
        {isRegister && (
          <>
            <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" placeholder="Username" />
            <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" placeholder="Email" />
            <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" placeholder="Country" />
            <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" placeholder="City" />
            <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" placeholder="Occupation" />
            <select className="w-full border border-border rounded-md px-3 py-2.5 bg-white text-muted-foreground">
              <option>Age Range</option>
              <option>18-24</option>
              <option>25-34</option>
              <option>35-44</option>
              <option>45+</option>
            </select>
          </>
        )}
        {!isRegister && (
          <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" placeholder="Email or Username" />
        )}
        <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" placeholder="Password" type="password" />
        {isRegister && (
          <input className="w-full border border-border rounded-md px-3 py-2.5 bg-white" placeholder="Confirm Password" type="password" />
        )}

        <button
          onClick={() => navigate("/")}
          className="w-full bg-primary text-white py-2.5 rounded-md mt-2"
        >
          {isRegister ? "Register" : "Log In"}
        </button>
      </div>

      <button
        onClick={() => setIsRegister(!isRegister)}
        className="mt-4 text-sm text-muted-foreground underline mx-auto"
      >
        {isRegister ? "Already have an account? Log In" : "Don't have an account? Register"}
      </button>
    </div>
  );
}
