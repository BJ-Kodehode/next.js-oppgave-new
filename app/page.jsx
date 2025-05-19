import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navigation Buttons */}
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
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

      {/* Main Section */}
      <main>
        <h1>Welcome to Our Website</h1>
        <p>This is some random information about our site. Feel free to explore!</p>
      </main>

      {/* Footer */}
      <footer style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
        <p>© 2025 Random Info. All rights reserved.</p>
      </footer>
    </div>
  );
}
