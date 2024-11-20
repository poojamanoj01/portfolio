import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

const Header = () => {
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Portfolio" },
    { id: 5, text: "Contact" },
  ];

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark py-3 sticky-top">
      <Container>
        <Navbar.Brand href="/" className="text-white fw-bold fs-5" style={{ fontFamily: 'Georgia, serif' }}>
         hi!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <ul className="navbar-nav">
            {navItems.map(({ id, text }) => (
              <li key={id} className="nav-item">
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  activeClass="active"
                  className="nav-link text-white px-3"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
