import React from 'react';
import "../styles/home.css"
import{Container,Row,Col} from "reactstrap";
import heroImg from "../assets/images/img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle";

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeatureTourList from '../components/Featured-tours/FeatureTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testinomials from '../components/Testinomial/Testinomials';
import Newsletter from '../shared/Newsletter';
import Footer from '../components/Footer/Footer';
const Home = () => {
  return (
  <>
{/*hero section --start */}
<section className="p-0 hero__slider-section">
  <Container>
  <Row>
    <Col lg='6'>
    <div className='hero__content'>
      <div className='hero__subtitle d-flex align-items-center'>
<Subtitle subtitle={"Know Us Before You Go"}/>
<img src={worldImg} alt=''/>
      </div>
<h1>
  Travelling opens the door to creating<span
  className='highlight'> memories</span>
</h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Distinctio tempore fugit obcaecati impedit modi unde eligendi, 
   laborum hic nihil iste eaque recusandae labore illum provident iure ratione, 
   sequi tenetur ullam.
</p>
    </div>
    </Col>


<Col lg="2">
  <div className='hero__img-box'>
    <img src={heroImg02} alt=""/>

  </div>
</Col>

<Col lg="2">
  <div className='hero__img-box mt-4'>
    <video src={heroVideo} alt="" controls/>

  </div>
</Col>

<Col lg="2">
  <div className='hero__img-box mt-5'>
    <img src={heroImg} alt=""/>

  </div>
</Col>

  <SearchBar />
  </Row>
  </Container>
  
</section>
  {/*Hero section start--------- */}
  <section>
    <Container>
      <Row>
    <Col lg='3'>
      <h5 className='services__subtitle'>What we serve</h5>
      <h2 className='services__title'>We offer the best services</h2>
    </Col>
    <ServiceList/>
      </Row>
    </Container>
  </section>

  {/*=====featured tour section start====== */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">
            Our featured tours
          </h2>
        </Col>
        <FeatureTourList/>
      </Row>
    </Container>
  </section>
  {/*featured tour section end */}

   {/*experience  tour section start */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
          <Subtitle subtitle={'Experience'}/>
          <h2> With our all experience <br/> We will serve you
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br/>
             Laboriosam iure illo doloribus, sequi velit ducimus? 
             Ipsum repudiandae mollitia sapiente alias,
             </p>
             </div>

             <div className="counter__wrapper d-flex align-items-
             center gap-5">
              
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successfull Trips</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
             </div>
        </Col>
        <Col lg='6'>
        <div className="experince__img">
          <img src={experienceImg} alt=""/>
        </div>
        </Col>
      </Row>
    </Container>
  </section>
 {/*experience tour section end */}
 {/*gallery  section start */}

<section>
  <Container>
    <Row>
    <Col lg='12'>
      <Subtitle subtitle={'Gallery'}/>
      <h2 className='gallery__title'>Visit our customer gallery</h2>
    </Col> 
    <Col lg='12'>
    <MasonryImagesGallery/>
    </Col> 
    </Row>
  </Container>
</section>
{/*gallery  section end */}


   {/*testinomial  section start */}

<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Our Lovers'}/>
    <h2 className="testinomial__title">What our fans say about us</h2>
      </Col>
      <Col lg='12'>
        <Testinomials/>
      </Col>
    </Row>
  </Container>
</section>



{/*testinomial   section end */}
<Newsletter/>
{/* Footer here */}
<Footer/>



</> 
);
};

export default Home;
