import Header from "../Header";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About
        imgUrl="img/mev2.jpg"
        aboutText="
        Tilbage i folkeskolen begyndte min interesse for computere virkelig at tage fart. 
        Jeg brugte rigtig mange timer på at finde ud af hvordan en computer egentlig virker, nok mest ved at skille dem ad. Det fik mig til at undersøge hvordan alt dette egentlig bliver til. 
        Som 16-årig i starten af gymnasiet, begyndte jeg nok som mange andre, at lave simple hjemmesider med HTML og CSS. Efter lidt programmeringsundervisning blev det udvidet med JavaScript og PHP. 
        Herefter begyndte min interesse og ambition for at arbejde med softwareudvikling. De fleste der kender mig, vil nok beskrive mig som en ekstrovert, engageret, positiv og lyttende person. 
        Jeg er meget ambitiøs og motiveret for at opnå nogle gode resultater med de opgaver/mål jeg sætter mig for. Specielt i forhold til min kommende karriere."
        skills={[
          "C#",
          "ASP.NET",
          "EF Core",
          "SQL",
          "HTML",
          "CSS",
          "PHP",
          "JavaScript",
          "React"
        ]}
      />
      <Projects />
      <Footer cvUrl="/" />
    </>
  );
};

export default Home;
