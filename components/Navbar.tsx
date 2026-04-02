"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link href="/" className="logo">
          AuthApp
        </Link>
      </div>

      <div className="nav-right">
        <Link href="/auth" className="nav-link">Auth</Link>
        <Link href="/dashboard" className="nav-link">Dashboard</Link>
      </div>
    </nav>
  )
}