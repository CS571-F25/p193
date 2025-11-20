import { Container, Row, Col, Button } from "react-bootstrap";
import heroAvatar from "../assets/avatar.jpg";

const heroLinks = [
  { href: "#", label: "Curriculum Vitae" },
  { href: "#", label: "Google Scholar" },
];

const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
];

const HERO_IMAGE = heroAvatar;

export default function Home() {
  return (
    <section className="home-hero">
      <Container className="home-hero__container">
        <Row className="align-items-center g-5">
          <Col md={5} lg={4} className="text-center">
            <div className="home-hero__avatar mx-auto">
              <img src={HERO_IMAGE} alt="Tianyi" />
            </div>
          </Col>
          <Col md={7} lg={8}>
            <h1 className="display-4 fw-bold mb-3">Tianyi Zhang</h1>
            <p className="lead text-muted mb-4">
              I’m currently studying Computer Science and Mathematics at UW–Madison, with interests
              spanning front-end development, systems programming, HCI, interaction research, and interactive tool design.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              {heroLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline-dark"
                  size="lg"
                  className="px-4"
                  href={link.href}
                >
                  {link.label}
                </Button>
              ))}
            </div>
            <div className="d-flex flex-wrap align-items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="fw-semibold link-dark text-decoration-none"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}