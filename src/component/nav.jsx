import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/style.css";
import Logo from "../assets/images/Logoimg1.jpg";
import Cartgif from "../assets/images/icons8-cart-50.png";
import Searchlogo from "../assets/images/icons8-search-26.png";
import Notificationlogo from "../assets/images/icons8-google-alerts-26.png";
import Accountlogo from "../assets/images/icons8-account-26.png";
import Circlelogo from "../assets/images/icons8-circle-48.png";
import { useEffect, useState } from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";

export default function NavBar() {

  const [drop,setDrop] = useState(false);




  useEffect(() => {
    $("#search-bar").hide();

    $("#search").on("click", () => {
      $("#search-bar").slideToggle();
    });

    return () => {
      $("#search").off("click");
    };
  }, []);

  const handleDropDown = () => {
    setDrop(!drop)
  }

  // console.log(drop);

  useEffect(()=>{

    handleDropDown()

  },[])

  return (
    <>
      {/* for desktop device */}

      <Navbar bg="light" expand="lg" className="d-none d-md-block" sticky="top">
        <Container>
          <Navbar.Brand id="me-auto">
            <NavLink href="/">
              <img
                src={Logo}
                width="60"
                height="65"
                style={{ borderRadius: 50 }}
                className="d-inline-block align-top"
              />
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <NavDropdown title="Cafe Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" id="drop-item">FOOD FOR MOOD</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="drop-item">
                HOT CLASSICS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="drop-item">ALL-TIME CHILLERS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" id="drop-item">
                ALL-DAY DELIGHT
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" id="drop-item">
                SWEET TOOTH X 32
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" id="drop-item">
                NUTRIONAL INFO
              </NavDropdown.Item>
            </NavDropdown> */}

            <NavLink to={"menu"} id="a" className="d-none d-md-block">
              Cafe Menu
            </NavLink>
            <NavLink id="a">
              E-shop{" "}
              <img
                src={Cartgif}
                width="30"
                height="25"
                className="d-inline-block align-top"
              />
            </NavLink>
            <NavLink id="a" className="d-none d-md-block">
              Order Online
            </NavLink>
            <NavLink id="a" className="d-none d-md-block">
              Cafe Finder/Cafe Locator
            </NavLink>
            <NavLink id="a">Mobile App/CCD Mobile App</NavLink>
          </Nav>
          <Nav>
            <Nav.Link id="search">
              <img src={Searchlogo} width="20" id="search2" height="20" />
            </Nav.Link>
            <Nav.Link>
              <img src={Notificationlogo} width="20" id="search2" height="20" />
            </Nav.Link>
            <Nav.Link>
              <img src={Accountlogo} width="20" id="search2" height="20" />
            </Nav.Link>
          </Nav>
        </Container>
        <div id="search-bar">
          <div id="search-bar-inner">
            <input type="text" id="input" placeholder="Type Something..." />
            <button id="btn">search</button>
          </div>
        </div>
      </Navbar>
      {/* for desktop device */}
      {/* for mobile device */}
      <Navbar expand="lg" className="d-block d-md-none">
        <Container>
        <img
              src={Circlelogo}
              width="60"
              height="60"
              style={{ borderRadius: 50 }}
              className="d-inline-block align-top"
              onClick={handleDropDown}
            />
        <Nav className="mx-auto">
          <NavLink to={'/'}>
        <img src={Logo} width="50"  height="50" /></NavLink>
        </Nav>

        <Nav>
        <img src={Searchlogo} width="50"  height="50" />
        </Nav>

        </Container>
      </Navbar>
      <div id={drop ? "toggle-drop-down" : ""} className="d-md-none"> 
      <NavLink id="links-mob" to={'menu'}> <h1>Cafe Menu</h1></NavLink> 
      <NavLink  id="links-mob">  <h1>E-Shop</h1></NavLink> 
      <NavLink  id="links-mob"> <h1>Order Online</h1></NavLink> 
      <NavLink  id="links-mob">  <h1>Cafe Finder/Cafe Locator</h1></NavLink> 
      <NavLink  id="links-mob">  <h1>Mobile App/CCD Mobile App</h1></NavLink> 
      </div>
      

      {/* for mobile device */}
    </>
  );
}
