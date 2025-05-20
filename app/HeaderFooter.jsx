"use client";

import Link from "next/link";

export default function HeaderFooter({ children }) {
  return (
    <div>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 50px", backgroundColor: "#2E2B23", color: "#DCC7A1" }}> {/* Dark forest brown background */}
        <h1 style={{ fontSize: "2.5rem", margin: "0" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#C19A6B" }}>Gimli's Home Page</Link> {/* Bronze/gold hint */}
        </h1>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link href="/">
            <button style={{ margin: "5px", padding: "10px 20px", backgroundColor: "#C19A6B", color: "#2E2B23", border: "none", borderRadius: "5px", cursor: "pointer" }}>Home</button>
          </Link>
          <Link href="/about">
            <button style={{ margin: "5px", padding: "10px 20px", backgroundColor: "#C19A6B", color: "#2E2B23", border: "none", borderRadius: "5px", cursor: "pointer" }}>About</button>
          </Link>
          <Link href="/contact">
            <button style={{ margin: "5px", padding: "10px 20px", backgroundColor: "#C19A6B", color: "#2E2B23", border: "none", borderRadius: "5px", cursor: "pointer" }}>Contact</button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#6B4C3B", color: "#DCC7A1" }}> {/* Rustic leather brown background */}
        <p>© 2025 Random Info. All rights reserved.</p>
      </footer>
    </div>
  );
}
