
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "./CheckEmail.css"



class CheckEmail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  testSubmit() {
    alert("submit is working");
    return true;
   }

  render() {

    return (
      <div className='Email-validation'>
        <Form onSubmit={this.testSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter email address for validation</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit" id="submitbutton">
            Submit
  </Button>
        </Form>
      </div>
    );
  }
}

export default CheckEmail;
