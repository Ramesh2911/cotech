import {
  Container,
  Row,
  Col,
  Button,
  Card
}
  from "react-bootstrap";
import {
  useNavigate
}
  from "react-router-dom";
import {
  FaLightbulb,
  FaDraftingCompass,
  FaCode,
  FaBug,
  FaRocket,
  FaShoppingCart,
  FaStar,
  FaCheck
}
  from "react-icons/fa";
import aboutImg from "../assets/about.jpg";
import website from "../assets/website.png";
import mobile from "../assets/mobile.png";
import business from "../assets/business.png";
import support from "../assets/support.png";
import affordable from "../assets/affordable.png";
import modern from "../assets/modern.png";
import fast from "../assets/fast.png";
import ecommerce from "../assets/ecommerce.png";
import businessImg from "../assets/businessImg.png";
import education from "../assets/education.png";
import delivery from "../assets/delivery.png";
import social from "../assets/social.png";
import secure from "../assets/secure.png";
import maintenance from "../assets/maintenance.png";
import design from "../assets/design.png";

const Home = () => {

  const navigate = useNavigate();

  const services = [
    {
      icon: website,
      title: "Website Development",
      desc: "Professional and responsive website solutions."
    },
    {
      icon: mobile,
      title: "Mobile App Development",
      desc: "Cross-platform mobile apps for modern businesses."
    },
    {
      icon: business,
      title: "Business Software",
      desc: "Custom software to automate business processes."
    },
    {
      icon: support,
      title: "Maintenance & Support",
      desc: "Reliable maintenance and technical support services."
    }
  ];

  const features = [
    {
      icon: affordable,
      title: "Affordable Solutions",
      desc: "High quality development with cost-effective solutions."
    },
    {
      icon: modern,
      title: "Modern Technology",
      desc: "We use modern frameworks and technologies."
    },
    {
      icon: fast,
      title: "Fast Development",
      desc: "Efficient development process with faster delivery."
    },
     {
      icon: secure,
      title: "Secure & Reliable",
      desc: "We build secure and stable digital systems with proper protection and data safety."
    },
     {
      icon: maintenance,
      title: "Maintenance & Support",
      desc: "We provide ongoing support, updates, and technical maintenance after project delivery."
    },
     {
      icon: design,
      title: "User-Friendly Design",
      desc: "Efficient development process with faster delivery."
    },
  ];

  const projects = [
    {
      img: ecommerce,
      title: "E-commerce Website & App"
    },
    {
      img: businessImg,
      title: "Business Website"
    },
    {
      img: education,
      title: "Educational Website"
    },
    {
      img: delivery,
      title: "Delivery App"
    },
    {
      img: social,
      title: "Social App"
    }
  ];

  const process = [
    {
      icon: <FaLightbulb size={35} color="#FFC107" />,
      title: "Idea Discussion"
    },
    {
      icon: <FaDraftingCompass size={35} color="#00BCD4" />,
      title: "Design & Planning"
    },
    {
      icon: <FaCode size={35} color="#4CAF50" />,
      title: "Development"
    },
    {
      icon: <FaBug size={35} color="#FF5722" />,
      title: "Testing"
    },
    {
      icon: <FaRocket size={35} color="#9C27B0" />,
      title: "Launch & Support"
    }
  ];

  const pricingPlans = [
    {
      icon: <FaLightbulb size={40} color="#00BCD4" />,
      title: "Starter",
      subtitle: "Beginner-Friendly",
      features: [
        "1 Page Website",
        "Simple WordPress Page",
        "AI Tools Suggestions"
      ]
    },
    {
      icon: <FaRocket size={40} color="#9C27B0" />,
      title: "Advanced",
      subtitle: "Professional",
      features: [
        "Multi Page Website",
        "Advanced WordPress Page",
        "SEO Friendly Design"
      ]
    },
    {
      icon: <FaShoppingCart size={40} color="#FF9800" />,
      title: "Pro",
      subtitle: "Business Focused",
      features: [
        "E-Commerce Website",
        "Advanced Website",
        "Simple Application"
      ]
    },
    {
      icon: <FaStar size={40} color="#2196F3" />,
      title: "Premium",
      subtitle: "Enterprise Solution",
      features: [
        "Advanced E-Commerce Website",
        "Multiple Function Website",
        "Advanced Application"
      ]
    }
  ];

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(120deg,#0f4c81,#1e88e5,#42a5f5)",
          color: "white",
          padding: "100px 20px",
          minHeight: "500px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Container>

          <Row className="align-items-center">

            <Col md={6} style={{ marginBottom: "30px" }}>

              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "44px",
                  lineHeight: "1.3"
                }}
              >
                Smart Technology Solutions for Modern Businesses
              </h1>

              <p
                style={{
                  marginTop: "20px",
                  fontSize: "18px",
                  opacity: "0.9"
                }}
              >
                Websites, Mobile Apps, Software Development and Digital Innovation
                for growing companies.
              </p>

              <div style={{ marginTop: "30px" }}>

                <Button
                  style={{
                    background: "#00c853",
                    border: "none",
                    marginRight: "15px",
                    padding: "12px 26px",
                    fontWeight: "600"
                  }}
                >
                  Get Started
                </Button>

                <Button
                  style={{
                    background: "white",
                    color: "#1976d2",
                    border: "none",
                    padding: "12px 26px",
                    fontWeight: "600"
                  }}
                  onClick={() => navigate("/services")}
                >
                  View Services
                </Button>
              </div>
            </Col>
            <Col md={6} style={{ textAlign: "center" }}>

              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                alt="technology"
                style={{
                  maxWidth: "420px",
                  width: "100%",
                  animation: "float 4s ease-in-out infinite"
                }}
              />

            </Col>

          </Row>

        </Container>
      </div>

      <div style={{ background: "#f4f7fb", padding: "70px 20px" }}>

        <Container>
          <Row className="align-items-center">
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
            <Col md={6}>
              <img
                src={aboutImg}
                alt="team"
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          padding: "80px 20px",
          background: "linear-gradient(135deg,#f5f9ff,#e3f2fd)"
        }}
      >
        <Container>

          <h2
            style={{
              textAlign: "center",
              marginBottom: "60px",
              fontWeight: "700",
              fontSize: "36px",
              color: "#0f4c81"
            }}
          >
            Our Services
          </h2>

          <Row>
            {services.map((service, index) => (
              <Col md={3} key={index} style={{ marginBottom: "30px" }}>
                <Card
                  style={{
                    border: "none",
                    textAlign: "center",
                    padding: "35px 25px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    borderRadius: "18px",
                    background: "#f2f2f2",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                  }}
                >

                  {/* ICON CENTER */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "20px"
                    }}
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain"
                      }}
                    />
                  </div>

                  <h5 style={{ fontWeight: "600", marginBottom: "10px" }}>
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
      </div>

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
                    padding: "35px 25px",
                    borderRadius: "15px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "15px"
                    }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      style={{
                        width: "85px",
                        height: "85px",
                        objectFit: "contain"
                      }}
                    />
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
        </Container>

      </div>

      <div
        style={{
          padding: "80px 20px",
          background: "linear-gradient(135deg,#f5f9ff,#e3f2fd)"
        }}
      >
        <Container>

          <h2
            style={{
              textAlign: "center",
              fontWeight: "700",
              marginBottom: "60px",
              color: "#0f4c81"
            }}
          >
            Our Recent Projects
          </h2>

          <Row>
            {projects.map((project, index) => (

              <Col md={4} lg={3} key={index} style={{ marginBottom: "30px" }}>

                <Card
                  style={{
                    border: "none",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
                  }}
                >

                  <Card.Img
                    src={project.img}
                    style={{
                      height: "180px",
                      objectFit: "cover"
                    }}
                  />

                  <Card.Body style={{ textAlign: "center" }}>
                    <h6 style={{ fontWeight: "600" }}>
                      {project.title}
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg,#0f4c81,#1e88e5)",
          padding: "80px 20px",
          color: "white"
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
            Our Development Process
          </h2>
          <Row className="justify-content-center">
            {process.map((item, index) => (
              <Col md={2} key={index} style={{ textAlign: "center" }}>

                <div
                  style={{
                    background: "white",
                    borderRadius: "50%",
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    marginBottom: "15px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {item.icon}
                </div>

                <p style={{ fontWeight: "500" }}>
                  {item.title}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div
        style={{
          padding: "80px 20px",
          background: "linear-gradient(135deg,#0f4c81,#1e88e5)",
          color: "white"
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
            Our Pricing Plans
          </h2>

          <Row>
            {pricingPlans.map((plan, index) => (
              <Col lg={3} md={6} sm={12} key={index} style={{ marginBottom: "30px" }}>
                <Card
                  style={{
                    border: "none",
                    borderRadius: "18px",
                    textAlign: "center",
                    padding: "35px 25px",
                    transition: "0.3s",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                  }}
                >

                  <div style={{ marginBottom: "15px" }}>
                    {plan.icon}
                  </div>

                  <p style={{ color: "#888", fontSize: "14px" }}>
                    {plan.subtitle}
                  </p>

                  <h4 style={{ fontWeight: "700", marginBottom: "20px" }}>
                    {plan.title}
                  </h4>

                  <div style={{ textAlign: "left", marginBottom: "25px" }}>

                    {plan.features.map((feature, i) => (

                      <p key={i} style={{ marginBottom: "8px" }}>
                        <FaCheck color="#4CAF50" style={{ marginRight: "8px" }} />
                        {feature}
                      </p>

                    ))}

                  </div>
                  <Button
                    style={{
                      background: "#1e88e5",
                      border: "none",
                      width: "100%"
                    }}
                  >
                    Get Started
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

    </div>
  );
};

export default Home;