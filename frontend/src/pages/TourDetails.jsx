import React from 'react';
import "../styles/tour-details.css"
import { Container,Row,Col,Form,ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours'

const TourDetails = () => {
 const {id}=useParams();
 const tour= tourData.find(tour=>tour.id.toString()===id)
//  const {photo,title,desc,price,reviews,city,distance,maxGroupSize}=tour;
//   return (
//   <>
//   <section>
//     <Container>
//       <Row>
//         <Col lg='8'>
//           <div className='tour__content'>
//             <img src={photo} alt="" />
//             <div className="tour__info">
//               <h2>{title}</h2>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   </section>
//   </>
//   );
const { photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className='tour__content'>
                <img src={photo} alt={title} className="tour__image" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <div className="tour__details">
                    <span><strong>Price:</strong> ${price}</span>
                    <span><strong>City:</strong> {city}</span>
                    <span><strong>Distance:</strong> {distance} km</span>
                    <span><strong>Max Group Size:</strong> {maxGroupSize}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="tour__reviews">
                <h4>Reviews</h4>
                <ListGroup>
                  {reviews.map((review, index) => (
                    <ListGroup.Item key={index}>
                      <strong>{review.name}</strong>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <Form className="review__form">
                <h4>Leave a Review</h4>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="4" placeholder="Your Review"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;