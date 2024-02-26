import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Gif1 from "../assets/images/cake.gif";
import Gif2 from "../assets/images/bean.gif";
import Gif3 from "../assets/images/tin.gif";


export default function Banner2() {
    
  return (
    <Container fluid>
      <Row>
        <Col  xxl={4} xl={4} lg={4} md={4} xs={12} sm={12} className="col-space">
          <img src={Gif1} className="img" />
          <div  id="section1-cols">
            <a  id="tag-a">
            <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="80"
                    viewBox="0 0 448 512"
                    id="i-transition"
                    className="svg"
                  >
                    <path
                      fill="#fff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </div>
              </div>
              <span>What's new</span>
            </a>
          </div>
        </Col>

        <Col lg="4" md="4" className="col-space">
          <img src={Gif2} className="img" />
          <div id="section1-cols">
            <a id="tag-a">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="80"
                    viewBox="0 0 448 512"
                    id="i-transition"
                    className="svg"
                  >
                    <path
                      fill="#fff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </div>
              </div>
              <span>find cafe near me</span>
            </a>
          </div>
        </Col>
        <Col lg="4" md="4" className="col-space">
          <img src={Gif3} className="img" />
          <div id="section1-cols">
            <a id="tag-a">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="80"
                    viewBox="0 0 448 512"
                    id="i-transition"
                    className="x-trans"
                  >
                    <path
                      fill="#fff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </div>
              </div>
              <span>Shop Now</span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
