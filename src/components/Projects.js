import Project from "../components/Project";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Portefølje</h1>
      <div class="project_list">

        <Project
          tags={["C#"]}
          imgUrl="img/massfilerenamer.png"
          title="Mass File Renamer"
          description="Dette program er skrevet for en virksomhed der stod med ca. 5000 billeder de ikke kunne bruge i deres produktkatalog, da producenten ud af det blå, opdaterede alle deres varernumre. Deres BusinessCentral side er opbygget således at den benytter de billeder der har samme navn som varens varenummer. Derfor stod en medarbejder foran mange timers manuelt arbejde. Det løste dette program heldigvis."
          demoUrl=""
          githubUrl="https://github.com/Friis-Alstrup/MassFileRenamer"
        />

        <Project
          tags={["HTML", "CSS", "PHP"]}
          imgUrl="img/klinikkenbk.png"
          title="KlinikkenBK"
          description="Dette er en simpel informationshjemmeside udviklet til en lille klinik i Faxe. Siden er har en simpel router skrevet i PHP, for bedre fejlhåndtering, men er primært konstrueret med HTML og CSS. Dette var min første betale opgave."
          demoUrl="https://klinikkenbk.dk/"
          githubUrl=""
        />   

        <Project
          tags={["React", "Javascript", "HTML", "CSS"]}
          imgUrl="img/portfolio.png"
          title="Portefølje"
          description="Dette er min personlige portefølje."
          demoUrl="/"
          githubUrl="https://github.com/Friis-Alstrup/Portfolio"
        />
      </div>
    </section> 
  );
};

export default Projects;
