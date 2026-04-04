"use client"

import AuthCard from "@/components/AuthCard"
import RegisterForm from "@/components/RegisterForm"

export default function RegisterPage() {
  return (
    <div className="container">
      <AuthCard>
        <h1 className="title">Register</h1>
        <RegisterForm />
      </AuthCard>
    </div>
  )
}