"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "@/lib/Auth"

export default function Home() {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/dashboard")
    }
  }, [session, router])

  const handleClick = () => {
    router.push("/auth")
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={handleClick} className="px-6 py-3 bg-blue-600 text-white rounded">
        Go to Auth
      </button>
    </div>
  )
}