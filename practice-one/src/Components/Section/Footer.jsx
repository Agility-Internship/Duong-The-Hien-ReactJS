import React from 'react';
import PropTypes from 'prop-types';

// Mock database
import dataFooter from '../../database/footerIcon';

// Image
import logo from '../../assets/logo.png';

const FooterLogo = ({ logoSrc, altText }) => (
  <div className="card-header">
    <a href="/" className="logo">
      <img src={logoSrc} alt={altText} />
    </a>
  </div>
);

FooterLogo.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

const FooterIcon = ({ iconSrc, altText, href }) => (
  <li className="list-item">
    <a className="item" href={href}>
      <img src={iconSrc} alt={altText} />
    </a>
  </li>
);

FooterIcon.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const FooterCardBody = ({ text }) => (
  <div className="card-body pt-5 pb-5">
    <p className="text-sm leading-medium">{text}</p>
  </div>
);

FooterCardBody.propTypes = {
  text: PropTypes.string.isRequired,
};

const FooterMenu = ({ title, children }) => (
  <div className="footer-menu nav-menu">
    <ul className="menu-list text-sm flex flex-col gap-4 ">
      <a href="/" className="item font-bold hover:text-primary">
        {title}
      </a>
      {children}
    </ul>
  </div>
);

FooterMenu.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const FooterMenuItem = ({ text }) => (
  <li className="list-item">
    <a className="item hover:text-secondary focus:tex-pri" href="/">
      {text}
    </a>
  </li>
);

FooterMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};

const Footer = () => {
  const {
    footerMenus, footerLinks, footerIcons, ShapeIcon,
  } = dataFooter;

  return (
    <footer className="footer bg-white absolute mt-56 lg:mt-0 m-7">
      <div className="footer-content container mx-auto mt-14 mb-12 flex flex-col lg:flex-row flex-wrap justify-between gap-y-8 lg:flex-nowrap">
        <div className="card w-[30%] lg:w-[20%]">
          <FooterLogo logoSrc={logo} altText="logo" />
          <FooterCardBody text="We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs" />
          <div className="card-footer">
            <ul className="media menu-list flex gap-5">
              {footerIcons.map((icon) => (
                <FooterIcon
                  key={icon.href}
                  iconSrc={icon.iconSrc}
                  altText={icon.altText}
                  href={icon.href}
                />
              ))}
            </ul>
          </div>
        </div>
        {footerMenus.map((menu) => (
          <FooterMenu key={menu.title} title={menu.title}>
            {menu.items.map((item) => (
              <FooterMenuItem key={item} text={item} />
            ))}
          </FooterMenu>
        ))}
      </div>

      <hr className="divider mx-8 h-px bg-lucky-grey opacity-24" />

      <div className="footer-rule container mx-auto pt-8">
        <div className="nav-menu flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
          <h3 className="item">
            <a className="text-gray-500" href="__blank">
              &copy;Copyright 2022 Yoora, Inc.
            </a>
          </h3>
          <ul className="menu-list flex flex-col lg:flex-row lg:gap-6">
            {footerLinks.map((item) => (
              <FooterMenuItem key={item.text} text={item.text} />
            ))}
          </ul>
          <div className="dropdown flex">
            <img
              src={ShapeIcon.iconSrc}
              alt="This is the icon for the change language button"
            />
            <select
              className="btn dropdown-toggle font-medium text-base"
              name="language"
              id="language"
            >
              <option value="english">English</option>
              <option value="vietnamese">Vietnamese</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
