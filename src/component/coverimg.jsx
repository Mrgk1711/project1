import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cafe from "../assets/images/img1.jpg";
import "../styles/style.css";

export default function CoverImage() {
  return (
    <>
      <Container fluid id="cover-img-head">
        <Row>
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="i-mg"
          >
            {/* <div id="img-contain">
                       <img src={Cafe} id="cafe-img" />
                       <div id="text-contain">
                        <h2>COFFEE TEST BEST</h2>
                        <div className="with">with a dash of</div>
                        <div className="h1">HISTORY</div>
                    </div>
                    </div>*/}

            <div className="bg-img">
              <div id="bg-text">
                <div className="h1">COFFEE TASTES BEST</div>
                <div className="h2">With a dash of</div>
                <div className="h3">HISTORY</div>
                <button className="btn-read">
                  <span className="btn-text-one">Read Our Story</span>
                  
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
