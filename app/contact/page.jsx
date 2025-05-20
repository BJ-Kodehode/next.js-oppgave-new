import HeaderFooter from "../HeaderFooter";

export default function ContactUs() {
  return (
    <HeaderFooter>
      <main style={{ textAlign: "center", padding: "20px" }}>
        <section id="contact-us">
          <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>
            Kontakt oss hvis du tør
          </h1>
          <p>
            Har du noen som vill kontakt oss. Svarer vi ikke i dag svarer vi
            kanskje i morgen eller en gang i fremtiden.
          </p>
        </section>

        <section id="contact-methods">
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 10px" }}>
            Kontakt Metoder som kanskje fungerer
          </h2>
          <p>E-post: kake@cookies.no</p>
          <p>
            Telefon: +47 Ring kakeutviklingen (vi har telefontjeneste fra år
            1876)
          </p>
          <p>Adresse: Alveskogen 300</p>
          <p>Alvedusk: Dekning eksisterer ikke over hode </p>
        </section>

        <section id="working-hours">
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 10px" }}>
            Arbeidstid
          </h2>
          <p>Mandag: oppdaterer databasen</p>
          <p>Tirsdag: Når vi er ferdig med å spise kake</p>
          <p>Onsdag: Møtedag om hvordan man skal arbeide</p>
          <p>Torsdag: Oppdaterer nettverket og koder</p>
          <p>Fredag: Spiser Burgere og pølser</p>
          <p>Lørdag: Synger og danser</p>
          <p>Søndag: Roper på elgen</p>
        </section>

        <section id="important-warning">
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 10px" }}>
            Viktig Advarsel
          </h2>
          <p>Vi minner om at "det virker ikke" ikke er en feilspecifikasjon,</p>
          <p>men heller en eksistensiell tilstand.</p>
          <p>For mer presise tilbakemeldinger, vennligst inkluder:</p>
          <p>Hva du forsøkte å gjøre</p>
          <p>Hva som faktisk skjedde</p>
          <p>Hvor nær du var ved å kaste maskinen ut vinduet</p>
          <p>Med vennlig hilsen,</p>
          <p>Dokumentasjonsdepartementet for Kodemagi</p>
        </section>
      </main>
    </HeaderFooter>
  );
}