import HeaderFooter from "../HeaderFooter";

export default function About() {
  return (
    <HeaderFooter>
      
      <main style={{ textAlign: "center", padding: "20px" }}>
        <section id="who-we-are">
          <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>
            Hvem er vi???
          </h1>
          <p>
            Velkommen til denne siden. Er en gjeng med rare personer som bor i
            kjelleren til staten og tror vi kan redde det offentlige med css
            animasjoner.
          </p>
        </section>

        <section id="our-dubious-history">
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 10px" }}>
            Vår tvilsomme historie
          </h2>
          <p>
            Selskapet ble grunnlagt en januar dag i 19 pil og bue da man gikk tom
            for sjokolademelk. Da skulle vi bli sersiøse. Den første kunden var en
            Hav ørn som trengte en nettside. Hav ørnen er en teknisk direktør som
            tok over som direktør. Ørnen hjelper til med algoritmene.
          </p>
        </section>

        <section id="our-services">
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 10px" }}>
            Tjenestene våre
          </h2>
          <p>Webdesign som fungerer i alle nettlesere</p>
          <p>Responsiv funksjon</p>
          <p>Next.js-utvikling (vi bruker AI tutorial)</p>
          <p>Brukervennlighet er utført av tante Olga</p>
          <p>Profesjonell prokrastinering og deadline-utvidelse</p>
          <p>Ekspertise i å gjøre enkle ting kompliserte</p>
        </section>

        <section id="our-values">
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 10px" }}>
            Verdiene til sjappa
          </h2>
          <p>Spise forkost før kode og mennesker</p>
          <p>Kundetilfredshet eksisterer ikke</p>
          <p>Fungerer koden, rør den overhode ikke</p>
          <p>Vi skylder alltid på AI og aldri på vår kode</p>
        </section>
      </main>
    </HeaderFooter>
  );
}