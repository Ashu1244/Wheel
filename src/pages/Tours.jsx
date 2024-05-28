<<<<<<< HEAD
import React from 'react';
import CommonSection from '../shared/CommonSection';
const Tours = () => {
  return(
    <>
    <CommonSection title={'All Tours'}/>
    </>
  )
=======
import React,{useState,useEffect} from 'react';
import CommonSection from '../shared/CommonSection';
import "../styles/tour.css";
import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import Newsletter from './../shared/Newsletter';
import tourData from '../assets/data/tours';
import { Container,Row,Col } from 'reactstrap';


const Tours = () => {
 const [pageCount,setPageCount]= useState(0);
 const[page,setPage]= useState(0);
 useEffect(()=>{
  const pages= Math.ceil(5/4);
  setPageCount(pages);
 },[page]);

  return  (
  <>
  <CommonSection title= {"All tours"}/>
  <section>
    <Container>
      <Row>
        <SearchBar/>
      </Row>
    </Container>
  </section>


  <section className='pt-0'>
    <Container>
      <Row>
        {
          tourData?.map(tour=>(
          <Col lg='3' className='mb-4' key={tour.id}>
            <TourCard tour={tour}/></Col>))
        }
        <Col lg='12'>
          <div className="pagination d-flex align-items-center
          justify-content-center mt-4 gap-3">
            {[...Array(pageCount).keys()].map(number=>(
              <span key={number} onClick={()=> setPage(number)}
              className={page=== number?"active__page": ""}
              >
                {number + 1}

              </span>
            ))}

          </div>
        </Col>
      </Row>
    </Container>
  </section>
  <Newsletter/>
  </>
  );
  
>>>>>>> 8fb5f05a46f18725b96e07f6c062f233f96a8348
};

export default Tours;
