import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
}
  from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(90deg,#0f2027,#00c9a7)",
        color: "#fff",
        padding: "50px 20px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "250px",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "140px", marginBottom: "15px" }}
            />

            <p style={{ lineHeight: "1.6", fontSize: "14px" }}>
              CTI Technologies provides innovative IT solutions including web
              development, mobile apps, and modern software solutions to help
              businesses grow digitally.
            </p>
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "200px",
            }}
          >
            <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

              <Link
                to="/terms"
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = "#00c6ff")}
                onMouseLeave={(e) => (e.target.style.color = "#ccc")}
              >
                Terms & Conditions
              </Link>

              <Link
                to="/privacy"
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = "#00c6ff")}
                onMouseLeave={(e) => (e.target.style.color = "#ccc")}
              >
                Privacy Policy
              </Link>

              <Link
                to="/career"
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = "#00c6ff")}
                onMouseLeave={(e) => (e.target.style.color = "#ccc")}
              >
                Career
              </Link>

              <Link
                to="/contact"
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = "#00c6ff")}
                onMouseLeave={(e) => (e.target.style.color = "#ccc")}
              >
                Contact
              </Link>
            </div>
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "200px",
            }}
          >
            <h4 style={{ marginBottom: "15px" }}>Follow Us</h4>

            <div style={{ display: "flex", gap: "15px", fontSize: "18px" }}>
              <a href="#" style={iconStyle}><FaFacebookF /></a>
              <a href="#" style={iconStyle}><FaTwitter /></a>
              <a href="#" style={iconStyle}><FaLinkedinIn /></a>
              <a href="#" style={iconStyle}><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          © {year} Technology and solutions. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#ccc",
  fontSize: "14px",
  transition: "0.3s",
  cursor: "pointer"
};

const iconStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Footer;