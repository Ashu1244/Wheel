import React from 'react';
import './footer.css';
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
 import {Link,NavLink} from 'react-router-dom';
 import logo from "../../assets/images/user.png";
 const quick__links=[
    {
   path:"/home",
   display:"Home",
  },
  {
    path:"/about",
    display:"About",
   },
   {
    path:"/tours",
    display:"Tours",
   },
  
    
  ];

  const quick__links2=[
    {
   path:"/gallery",
   display:"Gallery",
  },
  {
    path:"/login",
    display:"Login",
   },
   {
    path:"/register",
    display:"Register",
   },
  
    
  ];


const Footer = () => {
    const year= new Date().getFullYear()
  return (
   <footer>
    <Container>
        <Row>
        <div className='new__div border-2px align-items-center d-flex '>
            <Col lg='3'>
                <div className='logo'>
        <img src={logo} alt=""/>
        
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Iste accusamus officiis vitae dicta labore, itaque nihil exercitationem alias 
            ipsum possimus omnis ab nisi aliquam animi culpa dolores tempora esse iure!
          </p>
          <div className="social__links d-flex align-items-center gap-4">
  <span>
    <Link to ="#"><i class="ri-youtube-fill"></i></Link>
  </span>
  <span>
    <Link to ="#"><i class="ri-facebook-fill"></i></Link>
  </span>
  <span>
    <Link to ="#"><i class="ri-instagram-line"></i></Link>
  </span>
  <span>
    <Link to ="#"><i class="ri-github-fill"></i></Link>
  </span>


          </div>
          </div>
            </Col>

            <Col lg='3'>
                <h5 className='footer__link-title'>Discover</h5>
                <ListGroup className='footer__quick-links'>
                    {
                      quick__links.map((item,index)=>(
                        <ListGroupItem key={index} className='ps-0 border-0'> 
                            <Link to= {item.path}>{item.display}</Link>
                        </ListGroupItem>
                      ))  
                    }
                </ListGroup>
            </Col>
            <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>
                <ListGroup className='footer__quick-links'>
                    {
                      quick__links2.map((item,index)=>(
                        <ListGroupItem key={index} className='ps-0 border-0'> 
                            <Link to= {item.path}>{item.display}</Link>
                        </ListGroupItem>
                      ))  
                    }
                </ListGroup>
            </Col>
            <Col lg='3'>
            <h5 className='footer__link-title'>Contacts</h5>
                <ListGroup className='footer__quick-links'>
                    
                      
                        <ListGroupItem  className='ps-0 border-0
                        d-flex align-items-center gap-3'> 
                       <h6 className='mb-0 d-flex align-items-center gap-2'>
                        <span><i class="ri-map-pin-line"></i></span>
                        Adderess:
                       </h6>
                       <p className='mb-0'>Prayagraj,Uttarpradesh</p>
                        </ListGroupItem>
                       
                        <ListGroupItem  className='ps-0 border-0
                        d-flex align-items-center gap-3'> 
                       <h6 className='mb-0 d-flex align-items-center gap-2'>
                        <span>
                        <i class="ri-mail-fill"></i>
                            </span>
                        Email:
                       </h6>
                       <p className='mb-0'>ashutoshsinha1244@gmail.com</p>
                        </ListGroupItem>

                        <ListGroupItem  className='ps-0 border-0
                        d-flex align-items-center gap-3'> 
                       <h6 className='mb-0 d-flex align-items-center gap-2'>
                        <span>
                        <i class="ri-phone-fill"></i>
                            </span>
                        Phone:
                       </h6>
                       <p className='mb-0'>+91-9122171513</p>
                        </ListGroupItem>
                    
                </ListGroup>
            </Col>
            </div>
            <Col lg='12' className='text-center pt-5'>
                <p className="copyright">Copyright {year}, design
                and devoloped by Ashutosh and Daksh.All rights are reserved.</p>
            </Col>
        </Row>
    </Container>
   </footer>
  );
};

export default Footer;
