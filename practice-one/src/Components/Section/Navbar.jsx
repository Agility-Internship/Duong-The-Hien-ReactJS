import React from 'react';
import Button from '../Common/Buttons';

const Navbar = () => (
  <div className=" bg-light">
    <nav className="container mx-auto w-screen h-[80px]  ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-5">
          <a className="navbar-brand logo" href="#">
            <img src="src\assets\logo.png" alt="logo" />
          </a>
          <ul className="hidden ps-20 gap-10  md:flex">
            <li><a href="/Product" className="text-base hover:text-primary">Product</a></li>
            <li><a href="/Contact" className="text-base hover:text-primary">Pricing</a></li>
            <li><a href="/Company" className="text-base hover:text-primary">Company</a></li>
            <li><a href="/Recourses" className="text-base hover:text-primary">Recourses</a></li>
            <li><a href="/Contact" className="text-base hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 gap-5">
          <Button
            text="Log in"
            size="medium"
            variant="primary"
          />
          <Button
            text="Try for Free"
            size="medium"
            variant="secondary"
          />
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
