"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 250px", marginTop: "100px", marginBottom: "20px" }}>
        <h1>Gimli's Home Page</h1>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link href="/">
            <button>Home</button>
          </Link>
          <Link href="/about">
            <button>About</button>
          </Link>
          <Link href="/contact us">
            <button>Contact</button>
          </Link>
        </nav>
      </header>

      {/* Main Section */}
      <main style={{ textAlign: "center", margin: "100px auto" }}>
        <h1 style={{ color: "rebeccapurple" }}>Welcome to Our Website</h1>
        <p>This is some random information about our site. Feel free to explore!</p>
        <h2 style={{ color: "red" }}>Møt denne fantastiske</h2>
        <Image src="/Gimli.png" alt="Gimli" width={300} height={300} style={{ display: "block", margin: "0 auto" }} />
        <p>Han er fra Middel Earth og er den kuleste karakteren fra den tiden</p>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: "center", marginTop: "100px", backgroundColor: "sandybrown", padding: "20px", borderTop: "1px solid #ccc" }}>
        <p>© 2025 Random Info. All rights reserved.</p>
      </footer>

      <style jsx>{`
        body {
          background-color: #f8f8f8; /* Off-white */
          margin: 0;
          font-family: Arial, sans-serif;
        }
      `}</style>
    </div>
  );
}
