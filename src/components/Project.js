import Tag from "../components/Tag";

const Project = (props) => {
  const tags = props.tags;
  return (
    <div className="project">
        <div className="project_image">
            <img src={props.imgUrl} alt={props.title}/>
        </div>
        <div className="project_content">
            <div className="project_header">
                <h2>{props.title}</h2>
            </div>
            <div className="project_description">
                <p>{props.description}</p>
            </div>
            <div className="project_tags">
                {tags.map((tag) => (
                  <Tag title={tag} />
                ))}
            </div>
            <div className="project_links">
                {props.demoUrl !== "" ? (
                <a
                  href={props.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-display"></i> Live demo
                </a>
                ) : null}
                {props.githubUrl !== "" ? (
                  <a
                    href={props.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i> Github
                  </a>
                ) : null}
            </div>
        </div>
    </div>
  );
};

export default Project;
