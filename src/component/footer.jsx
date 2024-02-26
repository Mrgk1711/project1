import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/style1.css";



export default function Footer(){
    return(
        <>
        {/* for Desktop Devices */}
        <Container fluid  className=" social p-4 d-none d-md-block">
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} id="social-icons" >
                    
                <img width="40" height="40" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" id="icons-1" />

                <img width="40" height="40" src="https://img.icons8.com/color/48/facebook-circled--v1.png" alt="facebook-circled--v1" id="icons-1"/>

                <img width="40" height="40" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play" id="icons-1"/>
                     
                <img width="40" height="40" src="https://img.icons8.com/color/48/twitter-squared.png" alt="twitter-squared" id="icons-1"/>

                <img width="40" height="40" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" id="icons-1"/>
                </Col>
                <hr />
                <Col className="px-5" xxl={2} xl={2} lg={2} md={2}>
                    <div id="h4">Quick Links</div>
                    <div id="text-foot">Cafe Menu</div>
                    <div id="text-foot">Cafe Finder/ Cafe Loactor</div>
                    <div id="text-foot">Customer Care</div>
                </Col>

                <Col  className="px-5" xxl={2} xl={2} lg={2} md={2}>
                    <div id="h4">Cafe Menu</div>
                    <div id="text-foot">Food for Mood</div>
                    <div id="text-foot">Hot Classic</div>
                    <div id="text-foot">All-Time Chillers</div>
                    <div id="text-foot">All-Day Delight</div>
                    <div id="text-foot">Sweet Tooth X 32</div>
                    <div id="text-foot">Nutrional Info</div>
                </Col>
                

                <Col  className="px-5" xxl={3} xl={3} lg={3} md={3}>
                    <div id="h4">Shop</div>
                    <div id="text-foot">Coffee Mugs & Cups</div>
                    <div id="text-foot">Coffee Makers & Wakeup</div>
                    <div id="text-foot">Coffee Powders</div>
                    <div id="text-foot">Gifts</div>
                </Col>
               

                <Col  className="px-5" xxl={3} xl={3} lg={3} md={3}>
                    <div id="h4">Business</div>
                    <div id="text-foot">Lease Enquiry</div>
                    <div id="text-foot">Advertise With Us</div>
                    <div id="text-foot">Coffee Vending Machine</div>
                    <div id="text-foot">Outdoor Catering Service</div>
                    <div id="text-foot">Contact Us</div>
                </Col>

                <Col  className="px-5" xxl={2} xl={2} lg={2} md={2}>
                    <div id="h4">About Us</div>
                    <div id="text-foot">Awards</div>
                    <div id="text-foot">Business</div>
                    <div id="text-foot">Governance</div>
                    <div id="text-foot">Bean to Cup</div>
                    <div id="text-foot">News & Events</div>
                    <div id="text-foot">Careers</div>
                    <div id="text-foot">Contact Us</div><br />
                </Col>
                <hr />

                <div id="copy-right">&#169; Classical Cafe. All rights reserved</div>
            </Row>
        </Container>
        {/* for Desktop Devices */}

        {/* for Mobile Devices */}
            <Container className=" d-md-none">
                <Row>
                <Col  sm={12} xs={12} id="social-icons" className="p-4" >
                    
                    <img width="40" height="40" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" id="icons-1" />
    
                    <img width="40" height="40" src="https://img.icons8.com/color/48/facebook-circled--v1.png" alt="facebook-circled--v1" id="icons-1"/>
    
                    <img width="40" height="40" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play" id="icons-1"/>
                         
                    <img width="40" height="40" src="https://img.icons8.com/color/48/twitter-squared.png" alt="twitter-squared" id="icons-1"/>
    
                    <img width="40" height="40" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" id="icons-1"/>
                    </Col>
                    
                    <Col sm={12} xs={12}>
                        <div id="foot-content">
                        <a href="">Cafe Finder/ Cafe Locator</a>
                        <a href="">Cafe Menu</a>
                        <a href="">E-shop</a>
                        <a href="">Business</a>
                        <a href="">Contact Us</a>
                        </div>
                        <hr />
                        <div id="copy-rt">&#169; Classical Cafe. All rights reserved</div>
                    </Col>
                   
                </Row>
            </Container>
        {/* for Mobile Devices */}

        </>
    )
}