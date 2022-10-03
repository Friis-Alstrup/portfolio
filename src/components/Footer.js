const Footer = (props) => {
  return (
    <footer>
      <p>Phillip Friis-Alstrup &copy; 2022</p>
      <a className="cv" href={props.cvUrl}>
        Hent CV
      </a>
    </footer>
  );
};

export default Footer;
