const Projects = () => {
    return (
    <div class="container">
        <div class="projects">
            <div class="projects-title">
            <h3>Projekter</h3>
            </div>
            <div class="project-list">

            <div class="project">
                <div class="project-image">
                    <img src="img/portfolio.png" alt="Portfolio" />
                </div>
                <div class="project-info">
                <div class="project-desc">
                    <h4>Portefølje (pfal.dk)</h4>
                    <p>
                        Dette er min personlige hjemmeside/portefølje.
                    </p>
                    <div class="tag-list">
                        <div class="tag">
                            <p>React</p>
                        </div>
                        <div class="tag">
                            <p>JavaScript</p>
                        </div>
                        <div class="tag">
                            <p>HTML</p>
                        </div>
                        <div class="tag">
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                <div class="project-buttons">
                    <a class="project-button" href="/"><i class="bi bi-display"></i>Live demo</a>
                    <a class="project-button" href="https://github.com/Friis-Alstrup/Portfolio" target="_blank" rel="noreferrer"><i class="bi bi-github"></i>Github</a>
                </div>
                </div>
            </div>

            <div class="project">
                <div class="project-image">
                <img src="img/massfilerenamer.png" alt="MassFileRenamer" />
                </div>
                <div class="project-info">
                <div class="project-desc">
                    <h4>MassFileRenamer</h4>
                    <p>
                        MassFileRenamer er et program der kan omdøbe filer udfra indeksering i en csv-fil. 
                        Dette projekt opstod da en virksomhed pludselig stod med ca. 6.000 billeder fra deres produktkatalog, der ikke kunne bruges. 
                        Producenten havde opdateret serienumrene uden varsel og da deres system (BusinessCentral) netop uddeler billederne udfra produktets serienr, stod de i en situation hvor en medarbejder skulle bruge flere timer/dage på at omdøbe disse. 
                        Dette program omdøbte filerne på lidt over 1 minut.
                        </p>
                    <div class="tag-list">
                        <div class="tag">
                            <p>C#</p>
                        </div>
                    </div>
                </div>
                <div class="project-buttons">
                    <a class="project-button" href="https://github.com/Friis-Alstrup/MassFileRenamer" target="_blank" rel="noreferrer"><i class="bi bi-github"></i>Github</a>
                </div>
                </div>
            </div>

            <div class="project">
                <div class="project-image">
                    <img src="img/klinikkenbk.png" alt="klinikkenbk.dk" />
                </div>
                <div class="project-info">
                <div class="project-desc">
                    <h4>Klinikkenbk.dk</h4>
                    <p>
                        Denne hjemmeside er resultatet af min første betalte opgave. 
                        Kunden ønskede en simpel informationshjemmeside, hvor besøgende har mulighed for at gå ind og læse om de forskellige behandlinger og se priserne på dem. 
                        Dertil har jeg også udført simpel SEO optimering.
                    </p>
                    <div class="tag-list">
                        <div class="tag">
                            <p>HTML</p>
                        </div>
                        <div class="tag">
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                <div class="project-buttons">
                    <a class="project-button" href="https://klinikkenbk.dk/" target="_blank" rel="noreferrer"><i class="bi bi-display"></i>Live demo</a>
                    <a class="project-button" href="/" target="_blank" rel="noreferrer"><i class="bi bi-github"></i>Github</a>
                </div>
                </div>
            </div>

            </div>
        </div>
    </div>
    );
}

export default Projects;