import React from 'react';
import { Nav } from 'react-bootstrap';
import Button from '../Common/Button';

const Navbar = () => (
  <div className="bg-light">
    <nav className="container mx-auto w-screen h-[80px]">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-5">
          <a className="navbar-brand logo" href="#">
            <img src="src\assets\logo.png" alt="logo" />
          </a>
          <Nav className="hidden ps-20 gap-10 md:flex">
            <Nav.Link href="#Product" className="text-base hover:text-primary">
              Product
            </Nav.Link>
            <Nav.Link href="#Contact" className="text-base hover:text-primary">
              Pricing
            </Nav.Link>
            <Nav.Link href="#Company" className="text-base hover:text-primary">
              Company
            </Nav.Link>
            <Nav.Link href="#Recourses" className="text-base hover:text-primary">
              Resources
            </Nav.Link>
            <Nav.Link href="#Contact" className="text-base hover:text-primary">
              Contact
            </Nav.Link>
          </Nav>
        </div>
        <div className="hidden md:flex pr-4 gap-5">
          <Button text="Log in" variant="primary" />
          <Button text="Try for Free" variant="secondary" />
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
