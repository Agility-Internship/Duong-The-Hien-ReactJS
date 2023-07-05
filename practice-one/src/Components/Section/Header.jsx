import React from 'react';
import PropTypes from 'prop-types';

const HeaderCarousel = ({
  childrenBlack,
  childrenGray,
}) => (
  <h1 className="text-black text-6xl font-bold pt-[3rem] pb-24">
    <span className="text-black">{childrenBlack}</span>
    <br />
    <span className="text-gray-500">{childrenGray}</span>
  </h1>
);

HeaderCarousel.propTypes = {
  childrenBlack: PropTypes.node.isRequired,
  childrenGray: PropTypes.node.isRequired,
};

const HeaderTab = ({
  children,
  onClick,
}) => (
  <li className="list-none hover:rounded text-gray-500">
    <button
      className="hover:text-black pb-7"
      onClick={onClick}
      type="button"
      role="tab"
    >
      {children}
    </button>
  </li>
);

HeaderTab.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const Header = () => (
  <div className="bg-light h-full">
    <div className="container mx-auto w-screen ">
      <div className="px-2 w-full h-full">
        <HeaderCarousel
          childrenBlack="News and insights"
          childrenGray=" from our experts"
        />
      </div>
      <div className="px-2 flex gap-12">
        <HeaderTab>All Articles</HeaderTab>
        <HeaderTab>Sales</HeaderTab>
        <HeaderTab>Marketing</HeaderTab>
        <HeaderTab>Service</HeaderTab>
        <HeaderTab>Product</HeaderTab>
        <HeaderTab>News</HeaderTab>
      </div>
      <div />
    </div>
  </div>

);

export default Header;
