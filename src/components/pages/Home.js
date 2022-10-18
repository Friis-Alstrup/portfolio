import Header from "../Header";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
      <About
        imgUrl="img/me.jpg"
        aboutText="Mit navn er Phillip og jeg er 22 år gammel. Som person vil jeg beskrive mig selv som ekstrovert, ambitiøs, detaljeorienteret, lyttende og mangfoldig. Dertil er jeg en stor teamplayer og nyder godt samarbejde med andre mennesker. Til dagligt studerer jeg til datamatiker hos UCL i Odense. Min interesse for programmering startede allerede der jeg var ganske ung, og den interesse har holdt ved lige siden. På studiet programmerer jeg primært i C# og oftest i frameworket ASP.NET, sammen med EntityFramework og SQL Server. Her laver jeg alt fra informationshjemmesider til webshops og api'er. Når jeg ikke sidder foran computeren og nørder, sætter jeg enormt meget pris på sociale aktiviteter med kollegaer og venner."
        skills={[
          "C#",
          "ASP.NET MVC/API",
          "EF Core",
          "SQL",
          "HTML",
          "CSS",
          "JavaScript",
          "JSON"
        ]}
      />
      <Projects />
      <Footer cvUrl="/"/>
      </div>
    </>
  );
};

export default Home;
