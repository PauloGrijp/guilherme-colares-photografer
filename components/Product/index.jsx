import { Button, Card, Col, Container, Row } from "react-bootstrap"


function index() {
  return (
    <section className="">
      <h1 className="text-center p-5 display-4">Products</h1>
      <Container className="my-5">
        <Row>
          <Col sm={0} md={6} lg={4} className="mb-4">
            <Card  className="shadow-sm mx-auto">
              <Card.Img variant="top" src="https://source.unsplash.com/NuO6iTBkHxE/800x599" />
              <Card.Body>
                <Card.Title>Book 1</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel rerum veritatis odio, dignissimos.
                </Card.Text>
                <Button variant="link">See more</Button>
              </Card.Body>
            </Card>        
          </Col>
          
          <Col sm={0} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm mx-auto">
              <Card.Img variant="top" src="https://source.unsplash.com/NuO6iTBkHxE/800x599" />
              <Card.Body >
                <Card.Title>Book 2</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel rerum veritatis odio, dignissimos.
                </Card.Text>
                <Button variant="link">See more</Button>
              </Card.Body>
            </Card>        
          </Col>

          <Col sm={0} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm mx-auto">
              <Card.Img variant="top" src="https://source.unsplash.com/NuO6iTBkHxE/800x599" />
              <Card.Body>
                <Card.Title>Book 3</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel rerum veritatis odio, dignissimos.
                </Card.Text>
                <Button variant="link">See more</Button>
              </Card.Body>
            </Card>        
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default index
