import Nav from 'react-bootstrap/Nav';
import "../styles/style1.css";
import { NavLink } from 'react-router-dom';

function CafeMenu() {
  return (
    <Nav id='cafe-item' variant='pills'>
      <Nav.Item>
        <NavLink to={'hot'} defaultActiveKey="hot" id='cafe-item-li'>HOT CLASSICS</NavLink>
      </Nav.Item>
      <Nav.Item as="li"  >
        <NavLink to={'chill'}  id='cafe-item-li'>ALL-TIME CHILLERS</NavLink>
      </Nav.Item>
      <Nav.Item as="li"  >
        <NavLink to={'chill2'} id='cafe-item-li'>ALL-TIME CHILLERS</NavLink>
      </Nav.Item>
      <Nav.Item as="li"  >
        <NavLink to={'del'} id='cafe-item-li'>ALL-DAY DELIGHT</NavLink>
      </Nav.Item>
      <Nav.Item as="li"  >
        <NavLink to={'smooth'} id='cafe-item-li'>SWEET SMOOTH X 32</NavLink>
      </Nav.Item>
      <Nav.Item as="li"  >
        <NavLink  to={'info'} id='cafe-item-li'>NUTRIONAL INFO</NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default CafeMenu;