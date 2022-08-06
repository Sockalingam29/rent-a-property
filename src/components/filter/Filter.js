import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import propertyData from '../../propertyData.json';

import './Filter.css'

export default function Filter({properties,setProperties}) {
  const[mobileFilterActive,setmobileFilterActive]=useState(false);
  let filteredProperties=[];
  const [filters, setFilters] = useState({
    location: '',
    moveInDate: '',
    price: 'All',
    propertyType: 'Any'
  });

  const filterHandler = (e)=>{
    e.preventDefault();
    setmobileFilterActive(false);
    filteredProperties=propertyData;
    setProperties(propertyData);
    if(filters.location !== ''){
      filteredProperties=filteredProperties.filter((property)=>{
        return property.location === filters.location;
        })
    }
    if(filters.moveInDate !== ''){
      filteredProperties=filteredProperties.filter((property)=>{
        return new Date(Date.parse(property.available)) <= new Date(Date.parse(filters.moveInDate));
        })
    }
    if(filters.price!=="All"){
      let range=filters.price.split('-');
      filteredProperties=filteredProperties.filter((property)=>{
          return parseInt(property.price)>=parseInt(range[0]) && parseInt(property.price)<parseInt(range[1]);
      })
    }
    if(filters.propertyType!=="Any"){
      filteredProperties=filteredProperties.filter((property)=>{
        return property.propertyType === filters.propertyType;
      })
    }
    setProperties(filteredProperties);
  }
  return (
    <>
        <Container className="my-4 d-flex justify-content-between align-items-baseline">
            <div id="heading">Search Properties to Rent </div>
            <div className="d-md-block d-none">
                <input type='text' className="ds-input" placeholder='Search with search bar' autoComplete="off" spellCheck="false"/> 
            </div>
        </Container>

        <Container onClick={()=>setmobileFilterActive(!mobileFilterActive)} id="mobile-filter-container" className=" d-md-none my-4">
          <Button id="mobile-filter" className= "bg-white d-block" variant="outline-primary">Filter Results</Button>
        </Container>    
        
        <Container>
        
            <Form id="filter" onSubmit={filterHandler} className={mobileFilterActive ? "d-md-flex justify-content-evenly align-items-center flex-wrap bg-white " : "d-md-flex justify-content-evenly align-items-center flex-wrap bg-white d-none"}>                
              <Form.Group className="mb-lg-3 p-3" controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control onClick={(e)=>e.target.select()} value={filters['location']} onChange={(e)=>setFilters({...filters,location:e.target.value})} list="locationOptions" default="New York" placeholder="Location" />
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
                <Form.Label>Move in before</Form.Label>
                <Form.Control type="date" value={filters['moveInDate']} onChange={(e)=>setFilters({...filters,moveInDate:e.target.value})} min={new Date().toISOString().split('T')[0]} placeholder="Select check-in date" />
              </Form.Group>

              <div className="d-none vr d-lg-block my-4"></div>

              <Form.Group className="mb-lg-3 p-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Select value={filters['price']} onChange={(e)=>setFilters({...filters,price:e.target.value})}>
                  <option value="All">All</option>
                  <option value="0-500">min-$500</option>
                  <option value="500-2500">$500-$2500</option>
                  <option value="2500-5000">$2500-$5000</option>
                  <option value="5000-10000">$5000-$10000</option>
                </Form.Select>
              </Form.Group>

              <div className="d-none vr d-lg-block my-4"></div>

              <Form.Group className="mb-lg-3 p-3" controlId="propertyType">
                <Form.Label>Property Type</Form.Label>
                <Form.Select value={filters['propertyType']} onInput={(e)=>setFilters({...filters,propertyType:e.target.value})}>
                  <option value="Any">Any</option>
                  <option value="House">Houses</option>
                  <option value="Flat">Flats</option>
                  <option value="Plot">Plots</option>
                  <option value="Commercial">Commercial</option>
                </Form.Select>
              </Form.Group>

              <div className="d-none vr d-lg-block my-4"></div>

              <div className="p-3">
                <Button className="px-4 py-3" variant="primary" type="submit">
                  Submit
                </Button>
              </div>
          </Form>
        </Container>
    </>
  )
}
