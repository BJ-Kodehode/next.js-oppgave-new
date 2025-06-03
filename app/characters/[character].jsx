"use client";

import { useRouter } from "next/router";
import HeaderFooter from "../HeaderFooter";

export default function CharacterPage() {
  const router = useRouter();
  const { character } = router.query;

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
      </main>
    </HeaderFooter>
  );
}
