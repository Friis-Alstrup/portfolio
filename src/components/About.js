import Skill from "../components/Skill";

const About = (props) => {
  const skills = props.skills;
  return (
    <div className="container">
      <div className="about">
        <div className="picture">
          <img src={props.imgUrl} alt="" />
        </div>
        <div className="about-text">
          <div className="about-bio">
            <h3>Om mig</h3>
            <p>{props.aboutText}</p>
          </div>
          <div className="about-skills">
            <h3>Skills</h3>
            <div className="skill-list">
              {skills.map((skill) => (
                <Skill title={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
