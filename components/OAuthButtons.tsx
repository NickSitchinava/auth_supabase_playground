"use client"

import { supabase } from "@/lib/auth"

export default function OAuthButtons() {
  const login = async (provider: "google" | "github") => {
    await supabase.auth.signInWithOAuth({ provider })
  }

  return (
    <>
      <button className="btn oauth-btn" onClick={() => login("google")}>
        Continue with Google
      </button>
      <button className="btn oauth-btn" onClick={() => login("github")}>
        Continue with GitHub
      </button>
    </>
  )
}