import HeaderFooter from "../HeaderFooter";

export default function About() {
  return (
    <HeaderFooter>
      
      <main style={{ textAlign: "center", padding: "20px" }}>
        <section
          id="who-we-are"
          style={{
            margin: "20px auto",
            background: "linear-gradient(to right, blue, red)",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
          }} /* Blue to red gradient */
        >
          <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>
            Hvem er vi???
          </h1>
          <p>
            Velkommen til denne siden. Er en gjeng med rare personer som bor i
            kjelleren til staten og tror vi kan redde det offentlige med css
            animasjoner.
          </p>
        </section>

        <section
          id="our-dubious-history"
          style={{
            margin: "20px auto",
            background: "linear-gradient(to right, red, purple)",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
          }} /* Red to purple gradient */
        >
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 10px" }}>
            Vår tvilsomme historie
          </h2>
          <p>
            Selskapet ble grunnlagt en januar dag i 19 pil og bue da man gikk tom
            for sjokolademelg. Da skulle vi bli sersiøse. Den første kunden var en
            Hav ørn som trengte en nettside. Hav ørnen er en teknisk direktør som
            tok over som direktør. Ørnen hjelper til med algoritme.
          </p>
        </section>

        <section
          id="our-services"
          style={{
            margin: "20px auto",
            background: "linear-gradient(to right, green, yellow)",
            padding: "20px",
            borderRadius: "10px",
            color: "black",
          }} /* Green to yellow gradient */
        >
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

        <section
          id="our-values"
          style={{
            margin: "20px auto",
            background: "linear-gradient(to right, orange, red)",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
          }} /* Orange to red gradient */
        >
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