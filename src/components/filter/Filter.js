import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Filter.css'

export default function Filter() {
  return (
    <>
        <Container className="my-4 d-flex justify-content-between align-items-baseline">
            <div id="heading">Search Properties to Rent </div>
            <div className="d-md-block d-none">
                <input type='text' className="ds-input" placeholder='Search with search bar' autoComplete="off" spellCheck="false"/> 
            </div>
        </Container>

        <Container>
        
            <Form id="filter" className="d-md-flex justify-content-evenly align-items-center flex-wrap bg-white">                
              <Form.Group className="mb-lg-3 p-3" controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control onClick={(e)=>e.target.select()} list="locationOptions" default="New York" placeholder="Location" />
                <datalist id="locationOptions">
                  <option value="San Francisco" />
                  <option value="New York"/>
                  <option value="Seattle"/>
                  <option value="Los Angeles"/>
                  <option value="Chicago"/>
                </datalist>
              </Form.Group>

              <div className="d-none vr d-lg-block my-4"></div>

              <Form.Group className="mb-lg-3 p-3" controlId="moveInDate">
                <Form.Label>When</Form.Label>
                <Form.Control type="date" min={new Date().toISOString().split('T')[0]} placeholder="Select check-in date" />
              </Form.Group>

              <div className="d-none vr d-lg-block my-4"></div>

              <Form.Group className="mb-lg-3 p-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Select>
                  <option>Any</option>
                  <option value="1">min-$500</option>
                  <option value="2">$500-$2500</option>
                  <option value="3">$2500-$5000</option>
                  <option value="4">$5000-max</option>
                </Form.Select>
              </Form.Group>

              <div className="d-none vr d-lg-block my-4"></div>

              <Form.Group className="mb-lg-3 p-3" controlId="propertyType">
                <Form.Label>Property Type</Form.Label>
                <Form.Select>
                  <option>Any</option>
                  <option value="1">Houses</option>
                  <option value="2">Flats</option>
                  <option value="3">Plots</option>
                  <option value="4">Commercial</option>
                </Form.Select>
              </Form.Group>

              <div className="d-none vr d-lg-block my-4"></div>

              <div className="p-3">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
          </Form>
        </Container>
    </>
  )
}
