import { Container, Col, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function index() {

  return (
    <section className="p5">
      <Container className="border rounded p-5">
          <ContactForm />
          <ContactInfo />
      </Container>
    </section>
          
    
  );
}

export default index;
