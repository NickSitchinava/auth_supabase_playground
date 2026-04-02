"use client"

import AuthCard from "@/components/AuthCard"
import OAuthButtons from "@/components/OAuthButtons"

export default function AuthPage() {
  return (
    <div className="container">
      <AuthCard>
        <h1 className="title">Sign In</h1>

        <OAuthButtons />

        <p style={{ textAlign: "center", margin: "12px 0", color: "#64748b" }}>
  or continue with email
</p>

        <input className="input" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />

        <button className="btn">Login</button>
        <button className="btn btn-secondary">Register</button>
        <button className="btn btn-secondary">Forgot Password</button>
      </AuthCard>
    </div>
  )
}