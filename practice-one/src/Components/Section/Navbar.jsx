import React from 'react';
import PropTypes from 'prop-types';

// Import the logo image
import logo from '../../assets/logo.png';

// Components
import Button from '../Common/Button';

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

const NavContent = ({ children }) => (
  <div className="nav-content flex gap-10 ps-10">{children}</div>
);

NavContent.propTypes = {
  children: PropTypes.node.isRequired,
};

const Navbar = () => (
  <div className="bg-light">
    <nav className="container mx-auto w-screen h-[80px]">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-5">
          <NavBrand to="#">
            <img src={logo} alt="logo" />
          </NavBrand>
          <div className="hidden lg:flex">
            <NavContent>
              <NavLink>Product</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>Company</NavLink>
              <NavLink>Resources</NavLink>
              <NavLink>Contact</NavLink>
            </NavContent>
          </div>
        </div>
        <div className="hidden lg:flex pr-4 gap-5">
          <Button text="Log in" variant="primary" />
          <Button text="Try for Free" variant="secondary" />
        </div>
        <div className="lg:hidden">
          <button type="button" className="focus:outline-none">
            <img src="src\assets\ic_menu.png" alt="menu_logo" />
          </button>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
