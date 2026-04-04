"use client"

import { useState } from "react"
import { supabase } from "@/lib/auth"
import { useRouter } from "next/navigation"
import AuthCard from "@/components/AuthCard"
import OAuthButtons from "@/components/OAuthButtons"
import Link from "next/link"

export default function AuthPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      return
    }

    router.push("/dashboard")
  }

  return (
    <div className="container">
      <AuthCard>
        <h1 className="title">Login</h1>

        <OAuthButtons />

        <p className="divider">or</p>

        <input
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn" onClick={handleLogin}>
          Login
        </button>

        <p className="link-text">
          Don’t have account? <Link href="/register">Register</Link>
        </p>
      </AuthCard>
    </div>
  )
}