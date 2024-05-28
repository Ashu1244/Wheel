import React from 'react'
import './common-section.css'
<<<<<<< HEAD
import { Container,Row,Col } from 'reactstrap'
const CommonSection = ({title}) => {
  return (
    <section className='common_section'>
      <div className="Container">
        <Row>
            <Col lg="12">
                <h1>{title}</h1>
            </Col>
        </Row>
      </div>
=======
import {Container,Row,Col} from 'reactstrap';

const CommonSection = ({title}) => {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg ='12'><h1>{title}</h1></Col>
        </Row>
      </Container>
>>>>>>> 8fb5f05a46f18725b96e07f6c062f233f96a8348
    </section>
  )
}

export default CommonSection
