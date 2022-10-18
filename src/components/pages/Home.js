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
        aboutText=""
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
      <Footer cvUrl="/"/>
      </div>
    </>
  );
};

export default Home;
