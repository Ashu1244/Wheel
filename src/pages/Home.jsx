import React from 'react';
import "../styles/home.css"
import{Container,Row,Col} from "reactstrap";
import heroImg from "../assets/images/img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import Subtitle from "../shared/Subtitle";
import SearchBar from '../shared/SearchBar';
const Home = () => {
  return <>
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
  
</> 
};

export default Home;
