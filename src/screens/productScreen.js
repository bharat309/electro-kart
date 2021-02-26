import React, { Component } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/rating'
import products from '../mock-api/product'

const productScreen = ({ match }) => {
  const prod = products.find((p) => p._id === match.params.id)
  console.log('params', prod)
  return (
    <div>
      {/* {prod.name} */}
      <Link className='btn btn-dark my-3' to='/'>
        GO BACK
      </Link>
      <Row>
        <Col md={6}>
          <Image src={prod.image} alt={prod.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{prod.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={prod.rating}
                text={`${prod.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price: ${prod.price}</strong>
            </ListGroup.Item>
            <ListGroup.Item>{prod.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${prod.price}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {prod.countInStock >= 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-dark btn-block'
                  type='button'
                  disabled={prod.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default productScreen
