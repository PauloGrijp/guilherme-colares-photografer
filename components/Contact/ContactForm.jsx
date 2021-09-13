import { Button } from "react-bootstrap";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
// import { urlObjectKeys } from "next/dist/shared/lib/utils";
import { FaBeer } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';


function ContactForm() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // get the new errors from
    const newErrors = findFormErros()
    // conditional logic
    if ( ObjectKeys.keys(newErrors).length > 0 ) {
      // we got errors 
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Thank you for your message!')
    }
  }

  const findingErrors = () => {
    const { name, email, message } = form
    const newErrors = {};
    // name errors
    if (!name || name === '' ) newErrors.name = 'Can not be blank!'
    else if ( name.lebgth < 3 ) newErrors.name = 'name is to short!'
    //message errors
    if (!message || message === '' ) newErrors.message = 'Can not be blank!'
    else if ( message.lebgth < 5 ) newErrors.message = 'Message is too short!'

    return NewErrors
  }

  return (
    <div style={{ textAlign: "justify" }}>
      <section className="">
        {/* <div className=""> 
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-sky-900 w-full max-w-5xl p-8 rounded-xl shadow-lg">
            <div className="card card-body py-5">
              <div className="card card-body py-3"> */}
                <h3>Contact Me <span className="text-danger"><GrContact /></span>   </h3>                
                
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  eveniet sequi molestiae ab eius asperiores sit harum nesciunt
                  illum numquam, accusamus magni beatae velit saepe rem atque
                  aperiam.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Name
                    </Form.Label>            

                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        onchang={e => setField('name', e.target.value) }
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control 
                        type="email" 
                        placeholder="Email"
                        onChange={ e => setField('email', e.target.value) }
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Your message..."
                        onChange={ e => setField('message', e.target.value) }
                      />
                    </Col>
                  </Form.Group>

                  {/* <button
                    type="submit"
                    className=" bg-black text-white px-6 py-2"
                  >
                    Send Message
                  </button> */}

                  <Form.Group className="mb-3 text-white ">
                      <Col sm={10}>
                        <Button type="submit" variant="dark" className="px-2 border-0" >Send Message</Button>
                      </Col>
                    </Form.Group>
                </Form>
              {/* </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default ContactForm;
