"use client";

import { useRouter } from "next/router";
import HeaderFooter from "../HeaderFooter";
import Link from "next/link";

export default function CharacterPage() {
  const router = useRouter();
  const { character } = router.query;

  console.log("Character query:", character);

  const characterData = {
    gimli: {
      name: "Gimli",
      description: "En modig dverg fra Ringenes Herre som elsker kamp og vennskap.",
      image: "/Gimli.png",
    },
    legolas: {
      name: "Legolas",
      description: "En elegant alv med utmerket bueskyting og stil.",
      image: "/Legolas.png",
    },
    aragorn: {
      name: "Aragorn",
      description: "En modig leder og kriger som kjemper for det gode.",
      image: "/Aragorn.png",
    },
  };

  const characterInfo = characterData[character?.toLowerCase()] || {
    name: "Ukjent karakter",
    description: "Ingen informasjon tilgjengelig.",
    image: "/placeholder.png",
  };

  return (
    <HeaderFooter>
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>{characterInfo.name}</h1>
        <img
          src={characterInfo.image}
          alt={characterInfo.name}
          style={{ width: "300px", borderRadius: "10px", margin: "20px auto" }}
        />
        <p>{characterInfo.description}</p>
        <div>
          <Link route="/characters/gimli">
            <button style={{ margin: "5px", padding: "10px 20px", backgroundColor: "#C19A6B", color: "#2E2B23", border: "none", borderRadius: "5px", cursor: "pointer" }}>Gimli</button>
          </Link>
          <Link route="/characters/legolas">
            <button style={{ margin: "5px", padding: "10px 20px", backgroundColor: "#C19A6B", color: "#2E2B23", border: "none", borderRadius: "5px", cursor: "pointer" }}>Legolas</button>
          </Link>
          <Link route="/characters/aragorn">
            <button style={{ margin: "5px", padding: "10px 20px", backgroundColor: "#C19A6B", color: "#2E2B23", border: "none", borderRadius: "5px", cursor: "pointer" }}>Aragorn</button>
          </Link>
        </div>
      </main>
    </HeaderFooter>
  );
}
