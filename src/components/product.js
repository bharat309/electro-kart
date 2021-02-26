import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  console.log('prod---', product)
  return (
    <div>
      <Card className='my-4 p-3'>
        <Link to={`/product/${product._id}`} className='prod-thumb'>
          <Card.Img variant='top' className='rounded' src={product.image} />
          <Card.Title className='pt-1 prod-name'>{product.name}</Card.Title>
        </Link>
        <Card.Body className='p-0'>
          {/* <Card.Text className='prod-desc'>{product.description}</Card.Text> */}
          <Card.Text as='div'>
            <div className='my-3' as='h6'>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
