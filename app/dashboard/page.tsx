"use client"

import { useSession, supabase } from "@/lib/Auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push("/auth")
    }
  }, [session, router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/auth")
  }

  if (!session) return <p className="text-center mt-20">Loading...</p>

  return (
    <div className="p-6 max-w-md mx-auto mt-20 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Welcome, {session.user?.email}</p>
      <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  )
}