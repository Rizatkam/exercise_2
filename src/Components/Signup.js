import React, {useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap';

const Signup = ({dataSignup,...props}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [zip,setZip]=useState('')
    const onSubmitSignup=(e)=>{
        e.preventDefault()
        dataSignup({
            email,
            password,
            address,
            city,
            state,
            zip
        })
    }

return (
    <Form className="signup" onSubmit={(e)=>onSubmitSignup(e)}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" onChange={(e)=>setAddress(e.target.value)}/>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={(e)=>setCity(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" onChange={(e)=>setState(e.target.value)}>
        <option>Choose...</option>
        <option value="Jawa Barat">Jawa Barat</option>
        <option value="Jawa Tengah">Jawa Tengah</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control onChange={(e)=>setZip(e.target.value)}/>
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
)}

export default Signup