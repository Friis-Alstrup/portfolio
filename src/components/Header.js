const Header = () => {
  return (
    <section id="header">
        <div className="header_text">
          <h1>Phillip Friis-Alstrup</h1>
          <p>Ambitiøs datamatikerstuderende & softwareudvikler</p>
        </div>
        <div className="header_icons">
            <div className="icon">
                <a href="mailto:phillip.friis.alstrup@gmail.com" target="_blank" rel="noreferrer"><i className="bi bi-envelope-fill"></i></a>
            </div>
            <div className="icon">
                <a href="https://github.com/Friis-Alstrup" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
            </div>
            <div className="icon">
                <a href="https://www.linkedin.com/in/phillipfriisalstrup/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>
            <div className="icon">
                <a href="https://www.instagram.com/phillip.friis.alstrup/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            </div>
        </div>
    </section>
  );
};

export default Header;
