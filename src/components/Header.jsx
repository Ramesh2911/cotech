import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: "linear-gradient(90deg,#0f2027,#203a43,#2c5364)",
        padding: "10px 0",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
      }}
    >
      <Container>

        {/* LOGO */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="CTI"
            style={{
              height: "65px",
              transition: "0.3s"
            }}
          />
        </Navbar.Brand>

        {/* HAMBURGER */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            background: "#fff"
          }}
        />

        {/* MENU */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            justifyContent: "flex-end"
          }}
        >
          <Nav>

            {menuItem("Home", "/")}
            {menuItem("About", "/about")}
            {menuItem("Services", "/services")}
            {menuItem("Career", "/career")}
            {menuItem("Contact", "/contact")}

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

const menuItem = (name, path) => (
  <Nav.Link
    as={Link}
    to={path}
    style={{
      color: "#fff",
      fontSize: "17px",
      marginLeft: "20px",
      fontWeight: "500",
      position: "relative",
      transition: "0.3s"
    }}
    onMouseEnter={(e) => {
      e.target.style.color = "#00e5ff";
      e.target.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.target.style.color = "#fff";
      e.target.style.transform = "translateY(0)";
    }}
  >
    {name}
  </Nav.Link>
);

export default Header;