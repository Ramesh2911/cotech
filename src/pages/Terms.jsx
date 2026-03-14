import { Container, Row, Col, Card } from "react-bootstrap";

const Terms = () => {
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

          <h1 style={{ fontWeight: "700", fontSize: "40px" }}>
            Terms & Conditions
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              fontSize: "18px",
              opacity: "0.9"
            }}
          >
            Please read these terms carefully before using the
            Cotech & Intelligence website and services.
          </p>

        </Container>
      </div>


      {/* TERMS CONTENT */}

      <Container style={{ padding: "70px 20px" }}>

        <Row className="justify-content-center">

          <Col lg={10}>

            <Card
              style={{
                padding: "40px",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
              }}
            >

              {/* INTRO */}

              <h4 style={{ marginBottom: "15px" }}>
                Terms and Conditions – Cotech & Intelligence
              </h4>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                By accessing or using the website cotechintelligence.com,
                you agree to the following terms and conditions.
              </p>


              {/* SERVICES */}

              <h5 style={{ marginTop: "30px" }}>
                Services
              </h5>

              <p style={{ color: "#555" }}>
                Cotech & Intelligence provides digital services such as:
              </p>

              <ul style={{ color: "#555", lineHeight: "1.8" }}>
                <li>Website development</li>
                <li>Mobile application development</li>
                <li>Software solutions</li>
                <li>Technology consulting</li>
              </ul>


              {/* WEBSITE USE */}

              <h5 style={{ marginTop: "30px" }}>
                Use of Website
              </h5>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                Users agree not to misuse the website or attempt to damage,
                hack, or disrupt its services. Any unauthorized use of
                the website may result in termination of access.
              </p>


              {/* SERVICE AVAILABILITY */}

              <h5 style={{ marginTop: "30px" }}>
                Service Availability
              </h5>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                We strive to provide reliable services, but we do not
                guarantee uninterrupted or error-free operation of the
                website or services.
              </p>


              {/* INTELLECTUAL PROPERTY */}

              <h5 style={{ marginTop: "30px" }}>
                Intellectual Property
              </h5>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                All content on this website including logos, text,
                graphics, and designs are the property of
                Cotech & Intelligence and may not be copied or
                reproduced without written permission.
              </p>


              {/* CHANGES */}

              <h5 style={{ marginTop: "30px" }}>
                Changes to Terms
              </h5>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                We reserve the right to modify these terms at any
                time. Any updates will be posted on this page.
              </p>


              {/* CONTACT */}

              <h5 style={{ marginTop: "30px" }}>
                Contact Information
              </h5>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                If you have questions regarding these Terms &
                Conditions, please contact us:
              </p>

              <p style={{ color: "#555" }}>
                Email: cotechintelligence26@gmail.com <br />
                Phone: +91 8013881718 <br />
                Location: Baruipur Railgate (Near Milon Mall),
                South 24 Parganas, Kolkata - 700144
              </p>

            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Terms;