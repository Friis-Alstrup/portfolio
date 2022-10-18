import Skill from "../components/Skill";

const About = (props) => {
  const skills = props.skills;
  return (
    <section id="about">
        <div className="about_image">
            <img src={props.imgUrl} alt="Det er mig"/>
        </div>
        <div className="about_content">
            <div className="about_text">
                <h1>Hvem er jeg?</h1>
                <p>
                    {props.aboutText}
                </p>
            </div>
            <div className="about_skills">
                <h1>Værktøjskasse</h1>
                <div className="skills_list">
                  {skills.map((skill) => (
                    <Skill title={skill} />
                  ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
