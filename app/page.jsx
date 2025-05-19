"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderFooter from "./HeaderFooter";

export default function Home() {
  return (
    <HeaderFooter>
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
    </HeaderFooter>
  );
}
