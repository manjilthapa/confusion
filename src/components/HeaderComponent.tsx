import React, { useState } from "react";
import {
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC<{}> = (props) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
                <Link to="/menu" className="nav-link">
                  Menu
                </Link>
                <Link to="/contact-us" className="nav-link">
                  Contact us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>We are probably the best Oven Pizzeria in the town. </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default HeaderComponent;
