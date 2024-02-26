import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/Logoimg1.jpg";
import Searchlogo from "../assets/images/icons8-search-26.png";
import Circlelogo from "../assets/images/icons8-circle-48.png";
import Coffee from "../assets/images/bevarages.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";

function Banneer() {
  return (
    <>
      {/* for mobile device */}

      {/* <Navbar expand="lg" className="bg-body-tertiary d-md-none" sticky="top">
        <Container className="d-flex justify-content-between">
          <NavDropdown
            title={
              <span>
                <img src={Circlelogo} alt="Icon" width="30" id="" height="30" />
              </span>
            }
            id="basi-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1" id="drop-item1">
              CAFE FINDER/CAFE LOCATOR
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" id="drop-item2">
              CAFE MENU
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" id="drop-item3">
              E-SHOP
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" id="drop-item4">
              ORDER ONLINE
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" id="drop-item5">
              SOCIAL CORNER
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" id="drop-item6">
              MOBILE APP/CCD MOBILE APP
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" id="drop-item7">
              ABOUT US
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" id="drop-item8">
              LOGIN
            </NavDropdown.Item>
          </NavDropdown>

          <Navbar.Brand href="#home">
            <img src={Logo} width="30" id="" height="30" />
          </Navbar.Brand>
         
          <NavDropdown
            title={
              <span>
                <img src={Searchlogo} alt="Icon" width="30" id="" height="30" />
              </span>
            }
            id="basi-nav-dropdown-1"
           
          >
          </NavDropdown>
        </Container>
      </Navbar> */}

      {/* for mobile device */}

      <Carousel data-bs-theme="dark" id="carousel-head">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Coffee}
            style={{ height: "500px" }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Coffee}
            style={{ height: "500px" }}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Coffee}
            style={{ height: "500px" }}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Banneer;
