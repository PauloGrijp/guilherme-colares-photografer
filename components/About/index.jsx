import { Col, Container, Row } from "react-bootstrap";
import AboutImage from "./AboutImage";
import AboutInfo from "./AboutInfo";

function About() {
  return (
    <section className="py-5">
      <Container className="py-5 w-75">
      <h2 className="mb-5 display-4 mb-md-3 mb-sm-0 text-center">About</h2>
        <Row className="">
          <Col lg={6} md={0} className="mt-5 mt-md-0 mt-sm-3">
            <AboutImage />        
          </Col>
          <Col lg={6} md={0} className="mt-5 py-5 mt-md-0 mt-sm-0">
            <AboutInfo />        
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
