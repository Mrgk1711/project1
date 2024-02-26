import Carousel from 'react-bootstrap/Carousel';
import Menuimg  from "../assets/images/menuimg.jpg";
import '../styles/style1.css';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={Menuimg}
          style={{ height: "450px" }}
        />
        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;