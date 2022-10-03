const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h1>Phillip Friis-Alstrup</h1>
        <p>Ambitiøs datamatikerstuderende & softwareudvikler</p>
      </div>
      <div className="header-links">
        <a
          href="mailto:phillip.friis.alstrup@gmail.com"
          className="header-link"
        >
          <i className="bi bi-envelope-fill"></i>
        </a>
        <a
          href="https://github.com/Friis-Alstrup"
          className="header-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/phillipfriisalstrup/"
          className="header-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/phillip.friis.alstrup/"
          className="header-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
