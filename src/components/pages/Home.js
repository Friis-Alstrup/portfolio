import Header from "../Header";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About
        imgUrl="img/me.jpg"
        aboutText="
          Motiveret og ambitiøs er hvad jeg er, når det omhandler softwareudvikling og programmering. 
          Jeg er enormt detaljeorienteret og jeg elsker at udfordre mig selv i et hvert projekt jeg arbjeder med.
          En stor interesse for mig er webudvikling, da jeg synes det er et enormt spændende felt, der udvikler sig konstant.
          Dog når jeg ikke sidder foran computeren, nyder jeg samvær og hyggelige stunder med kollegaer, venner og familie.
          Dertil har jeg også en forkærlighed for specialøl. Så.. en rigtig nørd (på den gode måde) kan du nok godt kalde mig."
        skills={[
          "C#",
          ".NET",
          "EF",
          "PHP",
          "JS",
          "Node",
          "React",
          "SQL",
          "HTML",
          "CSS",
        ]}
      />
      <Projects />
      <Footer cvUrl="/" />
    </>
  );
};

export default Home;
