import { Container, Row, Col, Card } from "react-bootstrap";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              fontSize: "18px",
              opacity: "0.9"
            }}
          >
            Your privacy is important to us. This policy explains how
            Cotech & Intelligence (CTI) collects, uses, and protects
            your personal information.
          </p>
        </Container>
      </div>


      {/* PRIVACY CONTENT */}

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
                Privacy Policy – Cotech & Intelligence
              </h4>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                At Cotech & Intelligence (CTI), we respect your privacy
                and are committed to protecting your personal information.
              </p>


              {/* INFORMATION WE COLLECT */}

              <h5 style={{ marginTop: "30px" }}>
                Information We Collect
              </h5>

              <p style={{ color: "#555" }}>
                We may collect the following information when you use
                our website or services:
              </p>

              <ul style={{ color: "#555", lineHeight: "1.8" }}>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business details</li>
                <li>Messages sent through our contact form</li>
              </ul>


              {/* HOW WE USE */}

              <h5 style={{ marginTop: "30px" }}>
                How We Use Your Information
              </h5>

              <p style={{ color: "#555" }}>
                The information we collect may be used to:
              </p>

              <ul style={{ color: "#555", lineHeight: "1.8" }}>
                <li>Provide our services</li>
                <li>Respond to customer inquiries</li>
                <li>Improve our website and services</li>
                <li>Communicate important updates</li>
              </ul>


              {/* DATA PROTECTION */}

              <h5 style={{ marginTop: "30px" }}>
                Data Protection
              </h5>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                We take reasonable security measures to protect your
                personal information from unauthorized access,
                misuse, or disclosure.
              </p>


              {/* THIRD PARTY */}

              <h5 style={{ marginTop: "30px" }}>
                Third-Party Services
              </h5>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                Our website may use third-party tools such as hosting
                providers, analytics services, or payment gateways
                that may collect limited data according to their
                own privacy policies.
              </p>


              {/* POLICY UPDATE */}

              <h5 style={{ marginTop: "30px" }}>
                Changes to Privacy Policy
              </h5>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                We may update this Privacy Policy from time to time.
                Any updates will be posted on this page.
              </p>


              {/* CONTACT */}

              <h5 style={{ marginTop: "30px" }}>
                Contact Information
              </h5>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                If you have any questions regarding this Privacy Policy,
                you may contact us:
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

export default PrivacyPolicy;