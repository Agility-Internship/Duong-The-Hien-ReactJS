import React from 'react';
import PropTypes from 'prop-types';
// Components
import Button from '../Common/Button';

// NavLink component
const NavLink = ({
  children,
  to = `#${children}`,
}) => (
  <a href={to} className="nav-link text-base hover:text-primary">
    {children}
  </a>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// NavBrand component
const NavBrand = ({
  children,
  to = `#${children}`,
}) => (
  <a href={to} className="nav-brand">
    {children}
  </a>
);

NavBrand.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// NavContent component
const NavContent = ({ children }) => (
  <div className="nav-content flex gap-10 ps-10">{children}</div>
);

NavContent.propTypes = {
  children: PropTypes.node.isRequired,
};

// Navbar component
const Navbar = () => (
  <div className="bg-light">
    <nav className="container mx-auto w-screen h-[80px]">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-5">
          <NavBrand to="#">
            <img src="src\assets\logo.png" alt="logo" />
          </NavBrand>
          <NavContent>
            <NavLink>Product</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Company</NavLink>
            <NavLink>Resources</NavLink>
            <NavLink>Contact</NavLink>
          </NavContent>
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