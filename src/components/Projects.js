import Project from "../components/Project";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Portefølje</h1>
      <div class="project_list">
        <Project
          tags={["React", "Javascript", "HTML", "CSS"]}
          imgUrl="img/portfolio.png"
          title="Portefølje"
          description=""
          demoUrl="/"
          githubUrl="https://github.com/Friis-Alstrup/Portfolio"
        />

        <Project
          tags={["C#"]}
          imgUrl="img/massfilerenamer.png"
          title="Mass File Renamer"
          description=""
          demoUrl=""
          githubUrl="https://github.com/Friis-Alstrup/MassFileRenamer"
        />

        <Project
          tags={["HTML", "CSS"]}
          imgUrl="img/klinikkenbk.png"
          title="Klinikkenbk.dk"
          description=""
          demoUrl="https://klinikkenbk.dk/"
          githubUrl=""
        />        
      </div>
    </section> 
  );
};

export default Projects;
