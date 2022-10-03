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
        aboutText="lorem"
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
      <Footer />
    </>
  );
};

export default Home;
