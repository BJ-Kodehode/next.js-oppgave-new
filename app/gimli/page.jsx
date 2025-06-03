"use client";

import HeaderFooter from "../HeaderFooter";

export default function GimliPage() {
  return (
    <HeaderFooter>
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>Gimli</h1>
        <p>En modig dverg fra Ringenes Herre som elsker kamp og vennskap.</p>
        <img
          src="/Gimli.png"
          alt="Gimli"
          style={{ width: "300px", borderRadius: "10px", margin: "20px auto" }}
        />
      </main>
    </HeaderFooter>
  );
}