import React from 'react'
import './common-section.css'
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
    </section>
  )
}

export default CommonSection
