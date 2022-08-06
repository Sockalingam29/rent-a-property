import React from 'react'
import CardItem from './CardItem'
import Container from 'react-bootstrap/Container'

export default function Card({properties,setProperties}) {
  return (
    <Container className='d-flex flex-wrap justify-content-evenly align-items-center'>
    {properties.map((property)=>{
        return <CardItem property={property}/>
    })}
    </Container>
  )
}
