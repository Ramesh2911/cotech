import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaCogs,
  FaCloud,
  FaDatabase
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {

  const navigate = useNavigate();

  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Website Development",
      desc: "Modern, responsive, and scalable websites built with the latest technologies."
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Mobile App Development",
      desc: "Android and iOS mobile applications designed for performance and usability."
    },
    {
      icon: <FaCogs size={40} />,
      title: "Business Software",
      desc: "Custom business software to automate operations and improve productivity."
    },
    {
      icon: <FaRobot size={40} />,
      title: "AI Integration",
      desc: "AI-based tools and intelligent automation to enhance digital platforms."
    },
    {
      icon: <FaCloud size={40} />,
      title: "Cloud Solutions",
      desc: "Secure and scalable cloud-based systems for modern businesses."
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Data & System Setup",
      desc: "Database design, system integration, and digital infrastructure setup."
    }
  ];

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center"
        }}
      >
        <Container>

          <h1 style={{ fontWeight: "700", fontSize: "42px" }}>
            Our Services
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              fontSize: "18px",
              opacity: "0.9"
            }}
          >
            We provide innovative technology solutions to help businesses
            grow in the digital world.
          </p>

        </Container>
      </div>
      <Container style={{ padding: "70px 20px" }}>
        <Row>
          {services.map((service, index) => (
            <Col md={4} sm={6} key={index} style={{ marginBottom: "30px" }}>

              <Card
                style={{
                  textAlign: "center",
                  padding: "35px",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.15)";
                  e.currentTarget.style.background = "#f8fbff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                }}
              >

                <div
                  style={{
                    color: "#1e88e5",
                    marginBottom: "20px",
                    transition: "0.3s"
                  }}
                >
                  {service.icon}
                </div>

                <h5 style={{ fontWeight: "600" }}>
                  {service.title}
                </h5>

                <p style={{ color: "#666", fontSize: "15px" }}>
                  {service.desc}
                </p>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div
        style={{
          background: "#f4f7fb",
          padding: "70px 20px"
        }}
      >

        <Container>
          <Row className="align-items-center">
            <Col md={6} style={{ marginBottom: "30px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                alt="development"
                style={{ width: "100%", maxWidth: "420px" }}
              />

            </Col>
            <Col md={6}>
              <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>
                Smart Digital Solutions
              </h2>

              <p style={{ fontSize: "17px", color: "#555", lineHeight: "1.7" }}>
                At Cotech & Intelligence (CTI), we build technology solutions
                that help businesses grow faster and operate more efficiently.
                Our services focus on delivering modern digital tools that
                improve productivity and create better user experiences.
              </p>

              <p style={{ fontSize: "17px", color: "#555", lineHeight: "1.7" }}>
                From website development to intelligent AI solutions, we
                combine creativity and technology to build reliable systems
                that support long-term digital growth.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          background: "linear-gradient(135deg,#0f4c81,#1e88e5)",
          padding: "70px 20px",
          textAlign: "center",
          color: "white"
        }}
      >
        <Container>
          <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>
            Ready to Start Your Digital Journey?
          </h2>

          <p style={{ marginBottom: "30px", fontSize: "18px" }}>
            Let's build innovative technology solutions together.
          </p>
          <Button
            style={{
              background: "#4CAF50",
              border: "none",
              padding: "12px 30px",
              fontSize: "17px"
            }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Services;