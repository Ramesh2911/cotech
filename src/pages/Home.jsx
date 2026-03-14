import {
  Container,
  Row,
  Col,
  Button,
  Card
}
  from "react-bootstrap";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCogs,
  FaShieldAlt,
  FaRocket
}
  from "react-icons/fa";
import {
useNavigate
}
  from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Website Development",
      desc: "Professional and responsive website solutions."
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Mobile App Development",
      desc: "Cross-platform mobile apps for modern businesses."
    },
    {
      icon: <FaCogs size={40} />,
      title: "Business Software",
      desc: "Custom software to automate business processes."
    }
  ];

  const features = [
    {
      icon: <FaRocket size={35} />,
      title: "Affordable Solutions",
      desc: "High quality development with cost-effective solutions."
    },
    {
      icon: <FaShieldAlt size={35} />,
      title: "Modern Technology",
      desc: "We use modern frameworks and technologies."
    },
    {
      icon: <FaCogs size={35} />,
      title: "Fast Development",
      desc: "Efficient development process with faster delivery."
    }
  ];

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(135deg,#0f4c81,#1e88e5)",
          color: "white",
          padding: "80px 20px"
        }}
      >

        <Container>

          <Row className="align-items-center">

            <Col md={6} style={{ marginBottom: "30px" }}>

              <h1 style={{ fontWeight: "700", fontSize: "42px" }}>
                Smart Technology Solutions for Modern Businesses
              </h1>

              <p style={{ marginTop: "20px", fontSize: "18px" }}>
                Websites, Mobile Apps, and Innovative Digital Services
              </p>

              <div style={{ marginTop: "25px" }}>
                <Button
                  style={{
                    background: "#4CAF50",
                    border: "none",
                    marginRight: "10px",
                    padding: "10px 20px"
                  }}
                >
                  Get Started
                </Button>

                <Button
                  style={{
                    background: "white",
                    color: "#1e88e5",
                    border: "none",
                    padding: "10px 20px"
                  }}
                  onClick={()=> navigate("/services")}
                >
                  View Services
                </Button>
              </div>

            </Col>

            <Col md={6} style={{ textAlign: "center" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                alt="technology"
                style={{
                  maxWidth: "350px",
                  width: "100%"
                }}
              />
            </Col>

          </Row>

        </Container>

      </div>

      {/* WHO WE ARE */}

      <div style={{ background: "#f4f7fb", padding: "70px 20px" }}>

        <Container>

          <Row className="align-items-center">

            <Col md={6}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                alt="team"
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </Col>

            <Col md={6}>

              <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>
                Who We Are
              </h2>

              <p style={{ fontSize: "17px", color: "#555" }}>
                CTI Technologies is an innovative IT company delivering
                advanced digital solutions including web development,
                mobile applications and business software solutions.
              </p>

              <Button
                style={{
                  marginTop: "20px",
                  background: "#1e88e5",
                  border: "none"
                }}
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>

            </Col>

          </Row>

        </Container>

      </div>

      {/* SERVICES */}

      <div style={{ padding: "70px 20px" }}>

        <Container>

          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px",
              fontWeight: "700"
            }}
          >
            Our Services
          </h2>

          <Row>

            {services.map((service, index) => (

              <Col md={4} key={index} style={{ marginBottom: "30px" }}>

                <Card
                  style={{
                    border: "none",
                    textAlign: "center",
                    padding: "30px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    borderRadius: "12px"
                  }}
                >

                  <div style={{ color: "#1e88e5", marginBottom: "20px" }}>
                    {service.icon}
                  </div>

                  <h5 style={{ fontWeight: "600" }}>
                    {service.title}
                  </h5>

                  <p style={{ color: "#666" }}>
                    {service.desc}
                  </p>

                </Card>

              </Col>

            ))}

          </Row>

        </Container>

      </div>

      {/* WHY CHOOSE */}

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
              marginBottom: "50px",
              fontWeight: "700"
            }}
          >
            Why Choose CTI
          </h2>

          <Row>

            {features.map((feature, index) => (

              <Col md={4} key={index} style={{ marginBottom: "30px" }}>

                <Card
                  style={{
                    border: "none",
                    textAlign: "center",
                    padding: "30px",
                    borderRadius: "12px"
                  }}
                >

                  <div style={{ color: "#1e88e5", marginBottom: "15px" }}>
                    {feature.icon}
                  </div>

                  <h5 style={{ fontWeight: "600" }}>
                    {feature.title}
                  </h5>

                  <p style={{ color: "#666" }}>
                    {feature.desc}
                  </p>

                </Card>

              </Col>

            ))}

          </Row>

          <div style={{ textAlign: "center", marginTop: "30px" }}>

            <Button
              style={{
                background: "#4CAF50",
                border: "none",
                padding: "10px 25px"
              }}
              onClick={()=> navigate("/services")}
            >
              View All Services
            </Button>

          </div>

        </Container>

      </div>

    </div>
  );
};

export default Home;