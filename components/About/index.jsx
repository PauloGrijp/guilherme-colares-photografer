import { Col, Container, Row } from "react-bootstrap";
import AboutImage from "./AboutImage";
import AboutInfo from "./AboutInfo";

function About() {
  return (
    <section className="py-5">
      <h2 className="mb-5 display-4 mb-md-3 mb-sm-0 text-center">About</h2>  
      <Container className="py-5 clearfix">  
        <AboutImage />    
        <AboutInfo />        
      </Container>
    </section>
  )
}

export default About


  {/* <Row className="">
    <Col lg={6} md={12} className="p-3mt-md-0 mt-sm-3">
    </Col>
    <Col lg={6} md={12} className="p-3 mt-md-0 mt-sm-0">
    </Col>
  </Row> */}