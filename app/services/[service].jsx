"use client";

import { useRouter } from "next/router";
import HeaderFooter from "../HeaderFooter";

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query;

  const serviceData = {
    webdesign: {
      name: "Webdesign",
      description: "Vi lager nettsider som fungerer i alle nettlesere og ser fantastiske ut.",
    },
    nextjs: {
      name: "Next.js-utvikling",
      description: "Vi bruker Next.js for å bygge moderne og raske applikasjoner.",
    },
    usability: {
      name: "Brukervennlighet",
      description: "Vi sørger for at nettsidene er enkle å bruke, takket være tante Olga.",
    },
  };

  const serviceInfo = serviceData[service?.toLowerCase()] || {
    name: "Ukjent tjeneste",
    description: "Ingen informasjon tilgjengelig.",
  };

  return (
    <HeaderFooter>
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>{serviceInfo.name}</h1>
        <p>{serviceInfo.description}</p>
      </main>
    </HeaderFooter>
  );
}
