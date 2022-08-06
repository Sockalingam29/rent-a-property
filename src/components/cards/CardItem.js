import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import img from '../../images/property.webp'
import './CardItem.css'
import bed from '../../images/bed.png'
import bath from '../../images/bath.png'
import area from '../../images/ruler.png'
import likeOutline from '../../images/like-outline.png'
import likeFill from '../../images/like-fill.png'
import Badge from 'react-bootstrap/Badge'
import trending from '../../images/trending.png'

export default function CardItem({property}) {
  const [isLiked, setLiked] = useState(property.isLiked);
  return (
    <Card className="mx-2 my-4" style={{ width: '22rem' }}>
    <div><Card.Img className='propertyImg' variant="top" src={img} />
    <Card.ImgOverlay>
    <Badge className={property.isPopular ? "popularBadge" : "d-none"} ><img className="popularBadgeIcon me-1 " src={trending} alt=""/>Popular</Badge>
    </Card.ImgOverlay>
    </div>
    <Card.Body>
      <img className="like-icon" src={isLiked ? likeFill : likeOutline} onClick={()=>setLiked(!isLiked)} alt="like"  />
      <Card.Title>
        <span className='price'>${property.price}</span>
        <span className='fw-light'>/month</span>
      </Card.Title>
      <Card.Title>{property.name}</Card.Title>
      <Card.Text className='fw-light'>
        {property.address}
      </Card.Text>
      <hr />
      <Card.Text className='d-flex justify-content-between align-items-center'>
        <span><img className='me-1 amenities-img' src={bed} alt="bed"/>{property.beds} Beds</span>
        <span><img className='me-1 amenities-img' src={bath} alt="bath"/>{property.baths} Baths</span>
        <span><img className='me-1 amenities-img' src={area} alt="area"/>{property.area} m<sup>2</sup></span>
      </Card.Text>
    </Card.Body>
  </Card>

  )
}
