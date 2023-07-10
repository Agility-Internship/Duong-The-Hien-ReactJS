import React from 'react';
import PropTypes from 'prop-types';

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

const FooterCard = ({ children }) => <div className="card w-[30%] lg:w-[20%]">{children}</div>;

FooterCard.propTypes = {
  children: PropTypes.node.isRequired,
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
    <ul className="menu-list text-sm">
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
  <li className="list-item pt-4">
    <a className="item hover:text-secondary focus:tex-pri" href="/">
      {text}
    </a>
  </li>
);

FooterMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};

const Footer = () => (
  <footer className="footer bg-white relative mt-56 lg:mt-0 m-7">
    <div className="footer-content container mx-auto mt-14 mb-12 flex flex-col lg:flex-row flex-wrap justify-between gap-y-8 lg:flex-nowrap">
      <FooterCard>
        <FooterLogo logoSrc="src\assets\logo.png" altText="logo" />
        <FooterCardBody text="We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs" />
        <div className="card-footer">
          <ul className="media menu-list flex gap-5">
            <li>
              <a className="item" href="https://twitter.com/">
                <img
                  src="src\assets\Twitter.png"
                  alt="Here is a logo of the media above"
                />
              </a>
            </li>
            <li>
              <a className="item" href="https://www.facebook.com/">
                <img
                  src="src\assets\Facebook.png"
                  alt="Here is a logo of the media above"
                />
              </a>
            </li>
            <li>
              <a className="item" href="https://www.linkedin.com/">
                <img
                  src="src\assets\Linkedin.png"
                  alt="Here is a logo of the media above"
                />
              </a>
            </li>
          </ul>
        </div>
      </FooterCard>
      <FooterMenu title="Company">
        <FooterMenuItem text="About" />
        <FooterMenuItem text="Pricing" />
        <FooterMenuItem text="Jobs" />
        <FooterMenuItem text="Blog" />
        <FooterMenuItem text="Careers" />
      </FooterMenu>
      <FooterMenu title="Product">
        <FooterMenuItem text="Sales software" />
        <FooterMenuItem text="Features" />
        <FooterMenuItem text="Privacy and security" />
        <FooterMenuItem text="Marketplace" />
        <FooterMenuItem text="Status" />
        <FooterMenuItem text="API" />
      </FooterMenu>
      <FooterMenu title="Discover">
        <FooterMenuItem text="Partner Program" />
        <FooterMenuItem text="Get our newsletter" />
        <FooterMenuItem text="Sales Pipeline Course" />
        <FooterMenuItem text="What is CRM?" />
        <FooterMenuItem text="CRM Comparison" />
        <FooterMenuItem text="Resources" />
      </FooterMenu>
      <FooterMenu title="Help Center">
        <FooterMenuItem text="Community" />
        <FooterMenuItem text="Knowledge Base" />
        <FooterMenuItem text="Academy" />
        <FooterMenuItem text="Support" />
      </FooterMenu>
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
          <li className="list-item">
            <a className="item" href="/">
              Terms of Service
            </a>
          </li>
          <li className="list-item">
            <a className="item" href="/">
              Privacy Policy
            </a>
          </li>
          <li className="list-item">
            <a className="item" href="/">
              Cookie
            </a>
          </li>
        </ul>
        <div className="dropdown flex">
          <img
            src="src\assets\Shape.png"
            alt="This is the icon for the change language button"
          />
          <select
            className="btn dropdown-toggle font-medium text-base"
            name="language"
            id="language"
          >
            <option value="volvo">English</option>
            <option value="saab">Vietnamese</option>
          </select>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
