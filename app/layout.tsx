import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "MyAuthApp",
  description: "Simple Next.js + Supabase Auth App",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  )
}