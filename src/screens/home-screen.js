import React from 'react'
import products from '../mock-api/product'
import { Container, Row, Col } from 'reactstrap'
import Product from '../components/product'
import Rating from '../components/rating'

const HomeScreen = () => {
  //   console.log('1233', product.name)
  return (
    <>
      <h2 className='py-2'>Latest Products</h2>
      <Container>
        <Row>
          {products.map((p) => (
            <Col sm={12} md={6} lg={4} key={p._id}>
              <Product product={p} />
              {/* <h2>{product._id}</h2> */}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
