"use client";

import HeaderFooter from "../HeaderFooter";
import Link from "next/link";

export default function ServicePage({ params }) {
  const { service } = params;

  console.log("Service query:", service);

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

  const serviceInfo = serviceData[service.toLowerCase()];

  if (!serviceInfo) {
    return (
      <HeaderFooter>
        <main style={{ textAlign: "center", padding: "20px" }}>
          <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>Service ikke funnet</h1>
          <p>Beklager, vi kunne ikke finne informasjon om denne tjenesten.</p>
          <Link href="/services">Tilbake til tjenester</Link>
        </main>
      </HeaderFooter>
    );
  }

  return (
    <HeaderFooter>
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>{serviceInfo.name}</h1>
        <p>{serviceInfo.description}</p>
      </main>
    </HeaderFooter>
  );
}
