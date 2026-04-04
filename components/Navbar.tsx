"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AuthApp</div>

      <div className="nav-links">
        <Link href="/auth">Auth</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  )
}