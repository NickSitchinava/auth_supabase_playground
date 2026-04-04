"use client"

import { supabase, useSession } from "@/lib/auth"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const session = useSession()
  const router = useRouter()

  const logout = async () => {
    await supabase.auth.signOut()
    router.push("/auth")
  }

  if (!session) return <p>Loading...</p>

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Dashboard</h1>
        <p>{session.user.email}</p>
        <button className="btn" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}