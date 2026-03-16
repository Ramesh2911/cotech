import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          background: "linear-gradient(90deg,#0f2027,#00c9a7)",
          padding: "10px 0",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
        }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none"
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                height: "85px",
                width: "auto",
                marginRight: "12px"
              }}
            />

            <span
              style={{
                fontSize: "22px",
                fontWeight: "700",
                background: "linear-gradient(90deg,#00e5ff,#00ff9c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "1px"
              }}
            >
              COTECH & INTELLIGENCE
            </span>
          </Link>
          {!mobileView && (
            <div style={{ display: "flex", alignItems: "center" }}>

              {menuItem("Home", "/")}
              {menuItem("About", "/about")}
              {menuItem("Services", "/services")}
              {menuItem("Career", "/career")}
              {menuItem("Contact", "/contact")}

            </div>
          )}

          {/* HAMBURGER (Mobile Only) */}
          {mobileView && (
            <div
              onClick={() => setMenuOpen(true)}
              style={{
                fontSize: "28px",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              <FaBars />
            </div>
          )}

        </Container>
      </div>

      {/* MOBILE SIDEBAR */}
      {mobileView && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: menuOpen ? "0" : "-270px",
            width: "270px",
            height: "100vh",
            background: "linear-gradient(180deg,#0f2027,#00c9a7)",
            padding: "70px 30px",
            transition: "0.4s",
            zIndex: 2000,
            display: "flex",
            flexDirection: "column"
          }}
        >

          {/* CLOSE ICON */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "25px",
              right: "25px",
              fontSize: "24px",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            <FaTimes />
          </div>

          <Link style={mobileLink} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link style={mobileLink} to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link style={mobileLink} to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link style={mobileLink} to="/career" onClick={() => setMenuOpen(false)}>Career</Link>
          <Link style={mobileLink} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        </div>
      )}
    </>
  );
};

const menuItem = (name, path) => (
  <Link
    to={path}
    style={{
      color: "#fff",
      fontSize: "17px",
      marginLeft: "25px",
      textDecoration: "none",
      fontWeight: "500",
      transition: "0.3s"
    }}
    onMouseEnter={(e) => {
      e.target.style.color = "#00ff9c";
      e.target.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.target.style.color = "#fff";
      e.target.style.transform = "translateY(0)";
    }}
  >
    {name}
  </Link>
);

const mobileLink = {
  color: "#fff",
  fontSize: "18px",
  marginBottom: "25px",
  textDecoration: "none",
  fontWeight: "500"
};

export default Header;