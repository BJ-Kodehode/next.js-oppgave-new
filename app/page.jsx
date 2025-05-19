"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 50px", backgroundColor: "blue", color: "white" }}> {/* Blue background */}
        <h1 style={{ fontSize: "2.5rem", margin: "0" }}>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>Gimli's Home Page</Link>
        </h1>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link href="/">
            <button style={{ margin: "5px", padding: "10px 20px", backgroundColor: "red", color: "black", border: "none", borderRadius: "5px", cursor: "pointer" }}>Home</button>
          </Link>
          <Link href="/about">
            <button style={{ margin: "5px", padding: "10px 20px", backgroundColor: "red", color: "black", border: "none", borderRadius: "5px", cursor: "pointer" }}>About</button>
          </Link>
          <Link href="/contact">
            <button style={{ margin: "5px", padding: "10px 20px", backgroundColor: "red", color: "black", border: "none", borderRadius: "5px", cursor: "pointer" }}>Contact</button>
          </Link>
        </nav>
      </header>

      {/* Main Section */}
      <main style={{ textAlign: "center", padding: "20px" }}>
        <section id="welcome-section" style={{ margin: "20px auto", background: "linear-gradient(to right, blue, red)", padding: "20px", borderRadius: "10px", color: "white" }}> {/* Blue to red gradient */}
          <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>Welcome to Our Website</h1>
          <p>This is some random information about our site. Feel free to explore!</p>
        </section>

        <section id="gimli-section" style={{ margin: "20px auto", background: "linear-gradient(to right, red, purple)", padding: "20px", borderRadius: "10px", color: "white" }}> {/* Red to purple gradient */}
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 10px" }}>Møt denne fantastiske</h2>
          <Image src="/Gimli.png" alt="Gimli" width={300} height={300} style={{ display: "block", margin: "0 auto", borderRadius: "10px" }} />
          <p>Han er fra Middel Earth og er den kuleste karakteren fra den tiden</p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "sandybrown", color: "black" }}> {/* Sandy background */}
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
