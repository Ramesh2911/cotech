import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUsers, FaRocket, FaLaptopCode } from "react-icons/fa";

const Career = () => {

  const jobs = [
    {
      title: "Frontend Developer (React.js)",
      location: "Remote / Kolkata",
      type: "Full Time",
      desc: "Build modern UI applications using React.js and modern frontend technologies."
    },
    {
      title: "Backend Developer (Node.js)",
      location: "Remote",
      type: "Full Time",
      desc: "Develop APIs and scalable backend systems using Node.js and databases."
    },
    {
      title: "Mobile App Developer",
      location: "Remote",
      type: "Contract",
      desc: "Develop Android and iOS applications using React Native or Flutter."
    }
  ];

  return (
    <div>

      {/* HERO */}

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
            Join Our Team
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              fontSize: "18px",
              opacity: "0.9"
            }}
          >
            Be part of Cotech & Intelligence and help build smart
            technology solutions for the digital future.
          </p>

        </Container>

      </div>


      {/* WHY WORK WITH US */}

      <Container style={{ padding: "70px 20px" }}>

        <h2
          style={{
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "50px"
          }}
        >
          Why Work With Us
        </h2>

        <Row>

          {[
            {
              icon: <FaUsers size={40} />,
              title: "Collaborative Team",
              desc: "Work with passionate developers and innovators."
            },
            {
              icon: <FaRocket size={40} />,
              title: "Career Growth",
              desc: "Opportunities to grow with modern technologies."
            },
            {
              icon: <FaLaptopCode size={40} />,
              title: "Remote Friendly",
              desc: "Flexible work environment with remote options."
            }
          ].map((item, index) => (
            <Col md={4} key={index} style={{ marginBottom: "30px" }}>
              <Card
                style={{
                  textAlign: "center",
                  padding: "30px",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                }}
              >

                <div style={{ color: "#1e88e5", marginBottom: "15px" }}>
                  {item.icon}
                </div>

                <h5>{item.title}</h5>

                <p style={{ color: "#666" }}>
                  {item.desc}
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

          <h2
            style={{
              textAlign: "center",
              fontWeight: "700",
              marginBottom: "50px"
            }}
          >
            Current Openings
          </h2>

          <Row>

            {jobs.map((job, index) => (

              <Col md={4} key={index} style={{ marginBottom: "30px" }}>

                <Card
                  style={{
                    padding: "30px",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
                  }}
                >

                  <h5 style={{ fontWeight: "600" }}>
                    {job.title}
                  </h5>

                  <p style={{ color: "#888", marginBottom: "10px" }}>
                    {job.location} • {job.type}
                  </p>

                  <p style={{ color: "#666" }}>
                    {job.desc}
                  </p>

                  <Button
                    style={{
                      background: "#1e88e5",
                      border: "none",
                      marginTop: "10px"
                    }}
                  >
                    Apply Now
                  </Button>

                </Card>

              </Col>

            ))}

          </Row>

        </Container>

      </div>


      {/* CTA */}

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
            Don't See a Suitable Role?
          </h2>

          <p style={{ marginBottom: "30px", fontSize: "18px" }}>
            Send your resume to our team and we will contact you
            when a suitable opportunity is available.
          </p>

          <Button
            style={{
              background: "#4CAF50",
              border: "none",
              padding: "12px 30px",
              fontSize: "17px"
            }}
          >
            Send Resume
          </Button>

        </Container>

      </div>

    </div>
  );
};

export default Career;