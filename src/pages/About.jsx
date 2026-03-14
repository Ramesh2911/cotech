import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLaptopCode, FaMobileAlt, FaRobot, FaCogs } from "react-icons/fa";

const About = () => {
  return (
    <div>

      {/* HERO SECTION */}

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
            About Cotech & Intelligence (CTI)
          </h1>

          <p
            style={{
              maxWidth: "750px",
              margin: "20px auto",
              fontSize: "18px",
              opacity: "0.9"
            }}
          >
            Smart technology solutions designed to help businesses,
            startups, and individuals grow in the modern digital world.
          </p>

        </Container>
      </div>

      {/* COMPANY INTRO */}

      <Container style={{ padding: "70px 20px" }}>

        <Row className="align-items-center">

          <Col md={6} style={{ marginBottom: "30px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
              alt="technology"
              style={{
                width: "100%",
                maxWidth: "420px"
              }}
            />
          </Col>

          <Col md={6}>

            <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>
              Who We Are
            </h2>

            <p style={{ fontSize: "17px", color: "#555", lineHeight: "1.7" }}>
              Cotech & Intelligence (CTI) is a technology service company
              focused on providing smart digital solutions for businesses,
              startups, and individuals. Our goal is to make modern
              technology simple, affordable, and accessible for everyone.
            </p>

            <p style={{ fontSize: "17px", color: "#555", lineHeight: "1.7" }}>
              In today’s digital world, having a strong online presence is
              essential. CTI helps businesses build that presence through
              websites, applications, and intelligent digital tools that
              support growth and efficiency.
            </p>

          </Col>

        </Row>

      </Container>

      {/* MISSION VISION */}

      <div
        style={{
          background: "#f5f7fb",
          padding: "70px 20px"
        }}
      >
        <Container>

          <Row>

            <Col md={6} style={{ marginBottom: "30px" }}>
              <Card
                style={{
                  padding: "35px",
                  border: "none",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
                }}
              >
                <h3 style={{ fontWeight: "600" }}>Our Mission</h3>

                <p style={{ color: "#555", marginTop: "15px" }}>
                  Our mission is to simplify technology and help businesses
                  and individuals adopt digital tools with confidence.
                  We aim to provide reliable and affordable solutions that
                  support innovation, productivity, and digital
                  transformation.
                </p>
              </Card>
            </Col>

            <Col md={6}>
              <Card
                style={{
                  padding: "35px",
                  border: "none",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
                }}
              >
                <h3 style={{ fontWeight: "600" }}>Our Vision</h3>

                <p style={{ color: "#555", marginTop: "15px" }}>
                  Our vision is to build a trusted technology platform
                  that delivers intelligent digital services and
                  contributes to the future of AI-driven innovation.
                </p>
              </Card>
            </Col>

          </Row>

        </Container>
      </div>

      {/* WHAT WE DO */}

      <Container style={{ padding: "70px 20px" }}>

        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontWeight: "700"
          }}
        >
          What We Do
        </h2>

        <Row>

          {[
            {
              icon: <FaLaptopCode size={40} />,
              title: "Website Development"
            },
            {
              icon: <FaMobileAlt size={40} />,
              title: "Mobile Application Development"
            },
            {
              icon: <FaCogs size={40} />,
              title: "Business Software Solutions"
            },
            {
              icon: <FaRobot size={40} />,
              title: "AI Tools & Integrations"
            }
          ].map((service, index) => (

            <Col md={3} sm={6} key={index} style={{ marginBottom: "30px" }}>

              <Card
                style={{
                  textAlign: "center",
                  padding: "30px",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
                }}
              >
                <div style={{ color: "#1e88e5", marginBottom: "15px" }}>
                  {service.icon}
                </div>

                <h6 style={{ fontWeight: "600" }}>
                  {service.title}
                </h6>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

      {/* APPROACH */}

      <div
        style={{
          background: "linear-gradient(135deg,#0f4c81,#1e88e5)",
          padding: "70px 20px",
          color: "white"
        }}
      >
        <Container>

          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
              fontWeight: "700"
            }}
          >
            Our Approach
          </h2>

          <Row>

            {[
              "Clear and transparent service structure",
              "Affordable solutions for growing businesses",
              "Modern technology tools and platforms",
              "Continuous improvement and innovation"
            ].map((item, index) => (

              <Col md={3} key={index} style={{ marginBottom: "20px" }}>

                <div
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    padding: "25px",
                    borderRadius: "10px",
                    textAlign: "center"
                  }}
                >
                  {item}
                </div>

              </Col>

            ))}

          </Row>

        </Container>
      </div>

      {/* COMMITMENT */}

      <Container style={{ padding: "70px 20px" }}>

        <Row className="align-items-center">

          <Col md={6} style={{ marginBottom: "30px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="team"
              style={{ width: "100%", maxWidth: "420px" }}
            />
          </Col>

          <Col md={6}>

            <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>
              Our Commitment
            </h2>

            <p style={{ fontSize: "17px", color: "#555", lineHeight: "1.7" }}>
              We are committed to providing professional and reliable
              digital solutions while maintaining transparency and
              trust with our clients.
            </p>

            <p style={{ fontSize: "17px", color: "#555", lineHeight: "1.7" }}>
              Cotech & Intelligence aims to grow as a responsible
              technology service provider that helps people and
              businesses navigate the digital future.
            </p>

          </Col>

        </Row>

      </Container>

    </div>
  );
};

export default About;