import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {

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
            Contact Us
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              fontSize: "18px",
              opacity: "0.9"
            }}
          >
            Have a project idea or need digital solutions?
            Get in touch with the CTI team.
          </p>

        </Container>
      </div>

      <Container style={{ padding: "70px 20px" }}>
        <Row>

          {/* EMAIL */}
          <Col md={4} style={{ marginBottom: "30px" }}>
            <Card
              style={{
                textAlign: "center",
                padding: "35px 25px",
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "15px"
                }}
              >
                <FaEnvelope size={35} color="#1e88e5" />
              </div>

              <h5>Email</h5>

              <p style={{ color: "#666" }}>
                cotechintelligence26@gmail.com
              </p>

            </Card>
          </Col>


          {/* PHONE */}
          <Col md={4} style={{ marginBottom: "30px" }}>
            <Card
              style={{
                textAlign: "center",
                padding: "35px 25px",
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "15px"
                }}
              >
                <FaPhoneAlt size={35} color="#4CAF50" />
              </div>

              <h5>Phone</h5>

              <p style={{ color: "#666" }}>
                +91 8013881718
              </p>

            </Card>
          </Col>


          {/* LOCATION */}
          <Col md={4} style={{ marginBottom: "30px" }}>
            <Card
              style={{
                textAlign: "center",
                padding: "35px 25px",
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "15px"
                }}
              >
                <FaMapMarkerAlt size={35} color="#FF5722" />
              </div>

              <h5>Location</h5>

              <p style={{ color: "#666" }}>
                Baruipur Railgate (Near Milon Mall)
                <br />
                South 24 Parganas, Kolkata - 700144
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container style={{ paddingBottom: "70px" }}>

        <Row>

          {/* CONTACT FORM */}

          <Col md={6} style={{ marginBottom: "30px" }}>

            <Card
              style={{
                padding: "35px",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
              }}
            >

              <h4 style={{ marginBottom: "20px" }}>
                Send Message
              </h4>

              <Form>

                <Form.Group style={{ marginBottom: "15px" }}>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                  />
                </Form.Group>

                <Form.Group style={{ marginBottom: "15px" }}>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                  />
                </Form.Group>

                <Form.Group style={{ marginBottom: "15px" }}>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                  />
                </Form.Group>

                <Form.Group style={{ marginBottom: "15px" }}>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                  />
                </Form.Group>

                <Button
                  style={{
                    background: "#1e88e5",
                    border: "none",
                    padding: "10px 25px"
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
          <Col md={6}>
            <div style={{ position: "relative" }}>
              <iframe
                title="CTI Location"
                src="https://www.google.com/maps?q=Baruipur+Railgate+Near+Milon+Mall+Baruipur+West+Bengal&output=embed"
                width="100%"
                height="420"
                style={{
                  border: "0",
                  borderRadius: "12px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                }}
                loading="lazy"
              ></iframe>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Baruipur+Railgate+Near+Milon+Mall"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "15px",
                  background: "#1e88e5",
                  color: "white",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "14px"
                }}
              >
                Open in Google Maps
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;