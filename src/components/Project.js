import Tag from "../components/Tag";

const Project = (props) => {
  const tags = props.tags;
  return (
    <div className="project">
      <div className="project-image">
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <div className="project-info">
        <div className="project-desc">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <div className="tag-list">
            {tags.map((tag) => (
              <Tag title={tag} />
            ))}
          </div>
        </div>
        <div className="project-buttons">
          {props.demoUrl !== "" ? (
            <a
              className="project-button"
              href={props.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-display"></i>Live demo
            </a>
          ) : null}
          {props.githubUrl !== "" ? (
            <a
              className="project-button"
              href={props.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>Github
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
