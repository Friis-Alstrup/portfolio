import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="container">
      <div className="projects">
        <div className="projects-title">
          <h3>Projekter</h3>
        </div>
        <div className="project-list">
          <Project
            tags={["PHP (Laravel)", "JavaScript", "SQL", "HTML", "CSS"]}
            imgUrl="img/kjo.png"
            title="Registreringssystem til Kendt Jordemoderordning (WIP)"
            description="
                  Dette er et af mine igangværende projekter.
                  KJO (Kendt Jordemoderordning) ønsker en nem og intuitiv måde at registrere deres medarbejderes arbejde på.
                  Dertil skal det også skabes mulighed for at ledelsen kan udtrække de indtastede data, således at bla. kørselfradrag kan ajourføres."
            demoUrl=""
            githubUrl="https://github.com/Friis-Alstrup/KJO-Panel"
          />

          <Project
            tags={["React", "Javascript", "HTML", "CSS"]}
            imgUrl="img/portfolio.png"
            title="Portefølje (phillipf.dk)"
            description="Dette er min personlige hjemmeside/portefølje."
            demoUrl="/"
            githubUrl="https://github.com/Friis-Alstrup/Portfolio"
          />

          <Project
            tags={["C#"]}
            imgUrl="img/massfilerenamer.png"
            title="MassFileRenamer"
            description="
                  MassFileRenamer er et program der kan omdøbe filer udfra
                  indeksering i en csv-fil. Dette projekt opstod da en
                  virksomhed pludselig stod med ca. 6.000 billeder fra deres
                  produktkatalog, der ikke kunne bruges. Producenten havde
                  opdateret serienumrene uden varsel og da deres system
                  (BusinessCentral) netop uddeler billederne udfra produktets
                  serienr, stod de i en situation hvor en medarbejder skulle
                  bruge flere timer/dage på at omdøbe disse. Dette program
                  omdøbte filerne på lidt over 1 minut."
            demoUrl=""
            githubUrl="https://github.com/Friis-Alstrup/MassFileRenamer"
          />

          <Project
            tags={["HTML", "CSS"]}
            imgUrl="img/klinikkenbk.png"
            title="Klinikkenbk.dk"
            description="
                    Denne hjemmeside er resultatet af min første betalte opgave.
                    Kunden ønskede en simpel informationshjemmeside, hvor
                    besøgende har mulighed for at gå ind og læse om de forskellige
                    behandlinger og se priserne på dem. Dertil har jeg også udført
                    simpel SEO optimering."
            demoUrl="https://klinikkenbk.dk/"
            githubUrl=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
